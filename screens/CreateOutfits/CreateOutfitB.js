// Correspond à 2A-A du Figma

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TopContainerCreateClothe } from "../../Components/css/TopContainer";
import { CardAddClothesOutfit } from "../../Components/css/CardAddClothes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setMaintype } from "../../reducers/outfits";

function CreateOutfitB({ navigation }) {
  
  const dispatch = useDispatch();
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAccessoryOutfitSubmit = () => {
    dispatch(setMaintype("accessories"))
    navigation.navigate("CreateOutfitC");
  };

  const handleTopOutfitSubmit = () => {
    dispatch(setMaintype("top"))
    navigation.navigate("CreateOutfitC");
  };

  const handleShoesOutfitSubmit = () => {
    dispatch(setMaintype("shoes"))
    navigation.navigate("CreateOutfitC");
  };

  const handleBottomOutfitSubmit = () => {
    dispatch(setMaintype("bottom"))
    navigation.navigate("CreateOutfitC");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerCreateClothe handleGoBack={handleGoBack} />
      <CardAddClothesOutfit handleAccessoryOutfitSubmit={handleAccessoryOutfitSubmit} handleBottomOutfitSubmit={handleBottomOutfitSubmit} handleTopOutfitSubmit={handleTopOutfitSubmit} handleShoesOutfitSubmit={handleShoesOutfitSubmit}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default CreateOutfitB;