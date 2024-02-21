// Correspond à 2A-C sur Figma

import React from "react";
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TopContainerPictoSubtext,
  TopContainerPictoSubtextAccessories,
} from "../../Components/css/TopContainer";
import {
  FilterSubTypeAccessories,
  FilterSubTypeBottom,
  FilterSubTypeShoes,
  FilterSubTypeTop,
} from "../../Components/css/FilterSubType";
import { FilterColors } from "../../Components/css/FilterColors";
import { FilterBrand } from "../../Components/css/FilterBrand";
import ButtonOptions from "../../Components/css/ButtonOptions";
import { ButtonSkip } from "../../Components/css/ButtonGreenLight";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setColor,
  setName,
  setSubtype,
} from "../../reducers/clothes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CreateClotheC({ navigation }) {
  const dispatch = useDispatch();
  const clothe = useSelector((state) => state.clothes.temporaryClothe);
  const fullClothe = useSelector((state) => state.clothes.temporaryClothe);

  const handleTopSubmit = () => {
    navigation.navigate("CreateClotheD");
  };
  const handleSkip = () => {
    navigation.navigate("CreateClotheE");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubtypeInput = (text) => {
    dispatch(setSubtype(text));
  };

  const handleColorSelect = (text) => {
    dispatch(setColor(text));
  };

  const handleClotheName = () => {
    dispatch(
      setName(
        `${fullClothe.subtype} ${fullClothe.brand} ${fullClothe.color.translate}`
      )
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          {clothe.maintype === "accessories" ? (
            <TopContainerPictoSubtextAccessories handleGoBack={handleGoBack} />
          ) : (
            <TopContainerPictoSubtext handleGoBack={handleGoBack} />
          )}
          <View style={styles.modalContainer}>
            <View style={styles.modalGrey}>
              <FilterBrand />
              {clothe.maintype === "top" && (
                <FilterSubTypeTop handleSubtypeInput={handleSubtypeInput} />
              )}
              {clothe.maintype === "bottom" && (
                <FilterSubTypeBottom handleSubtypeInput={handleSubtypeInput} />
              )}
              {clothe.maintype === "shoes" && (
                <FilterSubTypeShoes handleSubtypeInput={handleSubtypeInput} />
              )}
              {clothe.maintype === "accessories" && (
                <FilterSubTypeAccessories
                  handleSubtypeInput={handleSubtypeInput}
                />
              )}
              <FilterColors handleColorSelect={handleColorSelect} />
              {clothe.maintype === "shoes" ||
              clothe.maintype === "accessories" ? null : (
                <ButtonOptions handleTopSubmit={handleTopSubmit} handleClotheName={handleClotheName} />
              )}
              <ButtonSkip
              handleSkip={handleSkip}
              handleClotheName={handleClotheName}
            />
            </View>
          </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    width: '100%',
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
  },
  modalGrey: {
    paddingTop: 20,
    height: windowHeight * 0.77,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 30,
  },
  textTitle: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textSubtitle: {
    width: windowWidth * 0.7,
    textAlign: "center",
  },
});

export default CreateClotheC;
