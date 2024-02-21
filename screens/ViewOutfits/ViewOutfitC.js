import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { TopContainerDeleteOutfit } from "../../Components/css/TopContainer";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteOutfit, addFavoriteId } from "../../reducers/outfits";
import {
  StarGreen,
  Star,
  LeftArrowCircle,
  RightArrowCircle,
  ChevronLeft,
  ChevronRight,
} from "../../Components/css/Pictos";
import {BACKEND_URL} from '@env';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ViewOutfitC({ navigation, route }) {
  const { selectedItem } = route.params;
  const dispatch = useDispatch();


  const outfits = useSelector((state) => state.outfits.outfits);


  const { top1, top2, bottom, shoes, accessory1, accessory2, accessory3 } =
    selectedItem;

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const favoriteArrayId = useSelector((state) => state.outfits.favoriteArrayId);


  const isFavorite = favoriteArrayId.includes(selectedItem.id);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCancel = () => {
    setModalVisible1(false);
    setModalVisible2(false);
  };

  const handleFavorite = (outfit) => {
    fetch(`https://${BACKEND_URL}/outfits`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ outfitId: outfit.id }),
    }).then((response) => response.json())
      .then((data) => {
        if (data.isFavorite) {
          dispatch(addFavoriteId(outfit.id))
          dispatch(addFavorite(outfit))
        } else {
          dispatch(addFavoriteId(outfit.id))
          dispatch(addFavorite(outfit))
        }
      });
  };
  const handleModalView = () => {
    setModalVisible1(true);
  };

  const handleList = () => {
    setModalVisible2(true);
  };

  const handleDelete = (outfit) => {
    console.log("id to delete", outfit.id)
    fetch(`https://${BACKEND_URL}/outfits`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ outfitId: outfit.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(addFavorite(outfit))
          dispatch(addFavoriteId(outfit.id))
          dispatch(deleteOutfit(outfit.id))
          console.log("outfits after delete", outfits)
          setModalVisible1(!true)
          navigation.navigate('HomeScreen')
        }
      }
      )
  }

  const [currentOutfitIndex, setCurrentOutfitIndex] = useState(
    outfits.findIndex((outfit) => outfit.id === selectedItem.id)
  );

  const handlePreviousOutfit = () => {
    const newIndex = (currentOutfitIndex - 1 + outfits.length) % outfits.length;
    setCurrentOutfitIndex(newIndex);
    const newSelectedOutfit = outfits[newIndex];
    navigation.setParams({ selectedItem: newSelectedOutfit });
  };

  const handleNextOutfit = () => {
    const newIndex = (currentOutfitIndex + 1) % outfits.length;
    setCurrentOutfitIndex(newIndex);
    const newSelectedOutfit = outfits[newIndex];
    navigation.setParams({ selectedItem: newSelectedOutfit });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible1}>
        <View style={styles.popupContainer}>
          <View style={styles.popupContent}>
            <Text style={styles.textContent}>
              Attention, vous êtes sur le point de supprimer votre tenue.
              Souhaitez-vous continuer ?
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(selectedItem)}
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
      <Modal animationType="slide" transparent={true} visible={modalVisible2}>
        <TouchableWithoutFeedback onPress={handleCancel}>
          <View style={styles.modalContainer}>
            <View style={styles.modalGrey}>
              {selectedItem.top1 && (
                <>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Haut(s)</Text>
                  </View>
                  <View style={styles.buttonWhite} activeOpacity={0.8}>
                    <Text style={styles.textButtonWhite}>
                      {selectedItem.top1.name}
                    </Text>
                  </View>
                </>
              )}
              {selectedItem.top2 && (
                <View style={styles.buttonWhite} activeOpacity={0.8}>
                  <Text style={styles.textButtonWhite}>
                    {selectedItem.top2.name}
                  </Text>
                </View>
              )}

              {selectedItem.bottom && (
                <>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Bas</Text>
                  </View>
                  <View style={styles.buttonWhite} activeOpacity={0.8}>
                    <Text style={styles.textButtonWhite}>
                      {selectedItem.bottom.name}
                    </Text>
                  </View>
                </>
              )}

              {selectedItem.shoes && (
                <>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Chaussures</Text>
                  </View>
                  <View style={styles.buttonWhite} activeOpacity={0.8}>
                    <Text style={styles.textButtonWhite}>
                      {selectedItem.shoes.name}
                    </Text>
                  </View>
                </>
              )}

              {selectedItem.accessory1 && (
                <>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Accessoires</Text>
                  </View>
                  <View style={styles.buttonWhite} activeOpacity={0.8}>
                    <Text style={styles.textButtonWhite}>
                      {selectedItem.accessory1.name}
                    </Text>
                  </View>
                </>
              )}

              {selectedItem.accessory2 && (
                <>
                  <View style={styles.buttonWhite} activeOpacity={0.8}>
                    <Text style={styles.textButtonWhite}>
                      {selectedItem.accessory2.name}
                    </Text>
                  </View>
                </>
              )}

              {selectedItem.accessory3 && (
                <>
                  <View style={styles.buttonWhite} activeOpacity={0.8}>
                    <Text style={styles.textButtonWhite}>
                      {selectedItem.accessory3.name}
                    </Text>
                  </View>
                </>
              )}

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TopContainerDeleteOutfit
        selectedItem={selectedItem}
        handleGoBack={handleGoBack}
        handleModalView={handleModalView}
        handleList={handleList}
      />
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedItem.image }} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handlePreviousOutfit} style={styles.chevronContainer}>
          {currentOutfitIndex !== 0 && <ChevronLeft />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFavorite(selectedItem)}>
          {isFavorite ? <StarGreen /> : <Star />}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextOutfit} style={styles.chevronContainer}>
          {currentOutfitIndex !== outfits.length - 1 && <ChevronRight />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 20,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  imageContainer: {
    width: "90%",
    height: windowHeight * 0.7,
  },
  bottomContainer: {
    alignItems: "center",
    flexDirection: "row",
    columnGap: 50,
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalGrey: {
    paddingTop: 20,
    height: windowHeight * 0.77,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 10,
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
  buttonWhite: {
    width: windowWidth * 0.9,
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    alignItems: "left",
    borderColor: "#6B9080",
    borderWidth : 1.5,
  },
  textButtonWhite: {
    fontFamily: "Lora-SemiBold",
    color: "#6B9080",
  },
  categoryText : {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize : 20,
    color: "#6B9080",
  },
  chevronContainer : {
    height : 40,
    width : 40,
  }
});

export default ViewOutfitC;
