// Correspond à 3A-A du Figma

import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { TopContainerPicto } from "../../Components/css/TopContainer";
import { useDispatch } from "react-redux";
import { CardEvent } from "../../Components/css/CardEvent";
import { Dimensions } from "react-native";
import { ButtonNextStepOutfit } from "../../Components/css/ButtonGreenLight";
import { resetEvent, resetHistory, resetTemporaryOutfit, setEvent } from "../../reducers/outfits";

const windowWidth = Dimensions.get("window").width;

function CreateOutfitA({ navigation }) {
  
  const dispatch = useDispatch();
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleTopSubmit = () => {
    navigation.navigate("CreateOutfitB");
  };

  const isSelected = (text) => {
    dispatch(setEvent(text));
  };

  // Reset du store
  const resetStore = () => {
    dispatch(resetEvent())
  }
  useEffect(() => {
    resetStore()
    dispatch(resetTemporaryOutfit())
    dispatch(resetHistory())
  },[]);

  return (
    <SafeAreaView style={styles.mainContainer} >
      <View>
        <TopContainerPicto handleGoBack={handleGoBack} />
        <View style={styles.subContainer}>
          <Text style={styles.textTitle}>
            Pour quel(s) type(s) d’event(s) ?
          </Text>
          <Text style={styles.textSubtitle}>
            Choisissez un ou plusieurs type(s) parmi la liste ci-dessous{" "}
          </Text>
          <CardEvent isSelected={isSelected} />
        </View>
      </View>
      <ButtonNextStepOutfit handleTopSubmit={handleTopSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  subContainer: {
    alignItems: "center",
  },
  textTitle: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textSubtitle: {
    width: windowWidth * 0.7,
    marginBottom: 20,
  },
  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
  },
});

export default CreateOutfitA;