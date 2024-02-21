// Correspond à la visualisation des différents ajouts à la tenue sur Figma

import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopContainerOverviewOutfit } from "../../Components/css/TopContainer";
import { PreviewOverview } from "../../Components/css/CardPreviewClothes";
import {
  ButtonAddClothes,
  ButtonValidateOutfit,
} from "../../Components/css/ButtonGreenLight";
import { useState } from "react";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  saveOutfit,
  setImage,
  pushToHistory,
  setNewHistory,
  resetTemporaryOutfit,
  modifyTemporaryOutfit,
  setId,
} from "../../reducers/outfits";
import { captureRef } from "react-native-view-shot";
import { useRef } from "react";
import {BACKEND_URL, CLOUDINARY_URL} from '@env'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function OverviewOutfit({ navigation }) {

  const dispatch = useDispatch();

  const temporaryOutfit = useSelector((state) => state.outfits.temporaryOutfit);
  const temporaryEvent = useSelector((state) => state.outfits.event);
  const temporaryOutfitHistory = useSelector(
    (state) => state.outfits.temporaryOutfitHistory
  );

  const username = useSelector((state) => state.user.value.username)

  const [modalVisible, setModalVisible] = useState(false);
  const [temporaryState, setTemporaryState] = useState(temporaryOutfit);

  useEffect(() => {
    dispatch(pushToHistory(temporaryOutfit));
  }, [temporaryOutfit]);
  console.log('temporaryOutfit',temporaryOutfit)

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddClotheToOutfit = () => {
    navigation.navigate("CreateOutfitB");
  };

  const hatList = [];
  const top1List = [];
  const beltList = [];
  const bottomList = [];
  const glassesList = [];
  const top2List = [];
  const shoeList = [];
  const otherAccessoriesList = [];

  // Remplir les tableaux en fonction du type de vêtement et du sous-type

  let hasTop1 = false;

  for (const clothe in temporaryOutfit) {
    const item = temporaryOutfit[clothe];
    if (item) {
      if (item.maintype === "accessories") {
        if (["Bonnet", "Chapeau", "Casquette"].includes(item.subtype)) {
          hatList.push(item);
        } else if (["Ceinture"].includes(item.subtype)) {
          beltList.push(item);
        } else if (["Lunettes"].includes(item.subtype)) {
          glassesList.push(item);
        } else {
          otherAccessoriesList.push(item);
        }
      } else if (item.maintype === "top") {
        if (["T-shirt", "Chemise"].includes(item.subtype)) {
          top1List.push(item);
          hasTop1 = true;
        } else {
          top2List.push(item);
        }
      } else if (item.maintype === "bottom") {
        bottomList.push(item);
      } else if (item.maintype === "shoes") {
        shoeList.push(item);
      }
    }
  }

  if (!hasTop1 && top2List.length > 0) {
    top1List.push(top2List[0]);
    top2List.splice(0, 1); // Retirer le premier élément du top 2 car il a été déplacé vers le top 1
  }

  // Combiner les tableaux dans l'ordre souhaité
  const combinedList = [
    ...hatList,
    ...top1List,
    ...bottomList,
    ...glassesList,
    ...top2List,
    ...beltList,
    ...shoeList,
    ...otherAccessoriesList,
  ];

  const combinedListTwoTops = [...top1List, ...top2List, ...bottomList];

  const selectedCount = combinedList.length;
  const isDoubleTop =
    top1List.length > 0 && top2List.length > 0 && selectedCount <= 3;
  const isDoubleTopBottom =
    top1List.length > 0 &&
    top2List.length > 0 &&
    bottomList.length > 0 &&
    selectedCount === 3;
  const isDoubleColumn = selectedCount > 3;

  const handleUndo = () => {
    const newHistory = [...temporaryOutfitHistory];
    newHistory.pop(); // Supprimer le dernier état
    if (newHistory.length < 1) {
      dispatch(resetTemporaryOutfit());
      dispatch(setNewHistory(newHistory));
      navigation.navigate("CreateOutfitA");
      return;
    }
    const previousState = newHistory[newHistory.length - 1];
    dispatch(modifyTemporaryOutfit(previousState));
    setTemporaryState(previousState);
    dispatch(setNewHistory(newHistory));
  };

  const handleSubmit = () => {
    setModalVisible(!true);
    const randomId = Math.random() * 1000;
    dispatch(setId(randomId));
    fetch(`https://${BACKEND_URL}/outfits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        top1: temporaryOutfit.top1,
        top2: temporaryOutfit.top2,
        bottom: temporaryOutfit.bottom,
        shoes: temporaryOutfit.shoes,
        accessory1: temporaryOutfit.accessory1,
        accessory2: temporaryOutfit.accessory2,
        accessory3: temporaryOutfit.accessory3,
        image: temporaryOutfit.image,
        event: temporaryEvent,
        id: randomId,
        isFavorite: false,
        username: username,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(saveOutfit());
          navigation.navigate("ViewOutfitA");
        }
      });
  };

  const handleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const outfitScreenshotRef = useRef();

  const handleValidateOutfit = async () => {
    try {
      const uri = await captureRef(outfitScreenshotRef, {
        format: "png",
        quality: 1,
      });

      const formData = new FormData();
      formData.append("file", {
        uri: uri,
        name: "photo.png",
        type: "image/png",
      });

      formData.append('upload_preset', "DressMeUp");

      fetch(`${CLOUDINARY_URL}`, {
          method: 'POST',
          body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
          // console.log("secured data returned from cloudinary", data);
          dispatch(setImage(data.secure_url)); 
          setModalVisible(true);
        });
    } catch (error) {
      console.log("Error capturing view or setting image: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.popupContainer}>
          <View style={styles.popupContent}>
            <Text style={styles.textContent}>
              Attention, vous ne pourrez pas modifier votre tenue plus tard.
              Êtes-vous sur de vouloir la valider ?
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleSubmit}
            >
              <Text style={styles.textTitle}>Confirmer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleCancel}
            >
              <Text style={styles.textTitle}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TopContainerOverviewOutfit
        handleGoBack={handleGoBack}
        handleUndo={handleUndo}
      />
      <View
        ref={outfitScreenshotRef}
        style={
          isDoubleTop
            ? styles.doubleColumnContainer
            : isDoubleColumn
            ? styles.doubleColumnContainer
            : styles.singleColumnContainer
        }
      >
        {isDoubleTopBottom
          ? combinedListTwoTops.map((clothe, index) => (
              <PreviewOverview key={index} clothe={clothe} />
            ))
          : combinedList.map((clothe, index) => (
              <PreviewOverview key={index} clothe={clothe} />
            ))}
      </View>
      <View>
        {selectedCount < 7 && (
          <ButtonAddClothes handleAddClotheToOutfit={handleAddClotheToOutfit} />
        )}
        {selectedCount >= 2 && (
          <ButtonValidateOutfit handleValidateOutfit={handleValidateOutfit} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#6B9080",
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
    color: "white",
  },
  doubleColumnContainer: {
    width: "90%",
    height: windowHeight * 0.7,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
    columnGap: 5,
  },
  doubleTopContainer: {
    width: "90%",
    height: windowHeight * 0.7,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    rowGap: 5,
    columnGap: 5,
  },
  singleColumnContainer: {
    width: "90%",
    height: windowHeight * 0.7,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
    columnGap: 5,
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background
  },
  popupContent: {
    backgroundColor: "#6B9080",
    width: "75%",
    height: "35%",
    borderRadius: 10,
    alignItems: "center",
  },
  textContent: {
    fontFamily: "Lora-Regular",
    color: "white",
    fontSize: 15,
    width: "70%",
    margin: 10,
    top: "10%",
    alignItems: "center",
    textAlign: "center",
  },
  deleteButton: {
    width: "80%",
    marginTop: 10,
    top: "20%",
    backgroundColor: "#A4C3B2",
    padding: 10,
    borderRadius: 5,
  },
  textTitle: {
    fontFamily: "Lora-SemiBold",
    textAlign: "center",
  },
});

export default OverviewOutfit;
