// Correspond à 3A-C du Figma

import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import { Filters } from "../../Components/css/Pictos";
import {
  setTop1,
  setTop2,
  setBottom,
  setShoes,
  setAccessory1,
  setAccessory2,
  setAccessory3,
} from "../../reducers/outfits";
import {
  TopContainerListingTop,
  TopContainerListingBottom,
  TopContainerListingAccessories,
  TopContainerListingShoes,
} from "../../Components/css/TopContainer";
import {
  PreviewListingFiltered,
} from "../../Components/css/CardPreviewClothes";

import { useDispatch, useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CreateOutfitC({ navigation, route }) {
  
  const dispatch = useDispatch();

  const { subtype, color, material, cut, season, rain, maintype, event } = route.params;

  const outfitmaintype = useSelector((state) => state.outfits.maintype);

  const top1 = useSelector((state) => state.outfits.temporaryOutfit.top1);
  const accessory1 = useSelector(
    (state) => state.outfits.temporaryOutfit.accessory1
  );
  const accessory2 = useSelector(
    (state) => state.outfits.temporaryOutfit.accessory2
  );
  const accessory3 = useSelector(
    (state) => state.outfits.temporaryOutfit.accessory3
  );

  const handleTopOutfitSubmit = (selectedTop) => {
    if (!top1) {
      dispatch(setTop1(selectedTop));
      navigation.navigate("OverviewOutfit");
    } else {
      dispatch(setTop2(selectedTop));
      navigation.navigate("OverviewOutfit");
    }
  };

  const handleBottomOutfitSubmit = (selectedBottom) => {
    dispatch(setBottom(selectedBottom));
    navigation.navigate("OverviewOutfit");
  };

  const handleShoesOutfitSubmit = (selectedShoes) => {
    dispatch(setShoes(selectedShoes));
    navigation.navigate("OverviewOutfit");
  };

  const handleAccessoryOutfitSubmit = (selectedAccessory) => {
    if (!accessory1) {
      dispatch(setAccessory1(selectedAccessory));
      navigation.navigate("OverviewOutfit");
    } else if (!accessory2) {
      dispatch(setAccessory2(selectedAccessory));
      navigation.navigate("OverviewOutfit");
    } else {
      dispatch(setAccessory3(selectedAccessory));
      navigation.navigate("OverviewOutfit");
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleModalFilters = () => {
    navigation.navigate('CreateOutfitC')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {outfitmaintype === "top" && (
        <TopContainerListingTop handleGoBack={handleGoBack} />
      )}
      {outfitmaintype === "bottom" && (
        <TopContainerListingBottom handleGoBack={handleGoBack} />
      )}
      {outfitmaintype === "shoes" && (
        <TopContainerListingShoes handleGoBack={handleGoBack} />
      )}
      {outfitmaintype === "accessories" && (
        <TopContainerListingAccessories handleGoBack={handleGoBack} />
      )}
      <View style={styles.filterContainer}>
        <View>
          <TextInput placeholder="Que cherchez-vous ?" style={styles.input} />
        </View>
        <View style={styles.pictoFilter}>
          <TouchableOpacity onPress={handleModalFilters}>
            <Filters />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <PreviewListingFiltered
        subtype={subtype}
        color={color}
        material={material}
        cut={cut}
        season={season}
        rain={rain}
        maintype={maintype}
        event={event}
        handleTopOutfitSubmit={handleTopOutfitSubmit}
        handleBottomOutfitSubmit={handleBottomOutfitSubmit}
        handleShoesOutfitSubmit={handleShoesOutfitSubmit}
        handleAccessoryOutfitSubmit={handleAccessoryOutfitSubmit}
        handle
      />
      </ScrollView>
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
  input: {
    width: windowWidth * 0.78,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },
  scrollViewContentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: 10,
    columnGap: 10,
  },
  pictoFilter: {
    alignSelf: "center",
    transform: [{ rotate: "90deg" }],
  },
  filterContainer: {
    width: windowWidth * 0.9,
    flexDirection: "row",
    alignContent: "center",
    justifyContent : "space-between"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalFilters : {
    paddingTop: 20,
    height: windowHeight * 0.77,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 10,
  },
  modalFilterContainer: {
    width: windowWidth * 0.9,
    flexDirection: "column",
    alignItems: "center",
    justifyContent : "space-between",
    rowGap: 5,
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
  buttonWhite: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#6B9080",
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
    color: "#6B9080",
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
  buttonWhite: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#6B9080",
  },
  textButtonWhite: {
    fontFamily: "Lora-SemiBold",
    color: "#6B9080",
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
  buttonFilters : {
    paddingBottom : windowHeight * 0.1,
    alignSelf : 'center',
    rowGap : 5,
  }
});

export default CreateOutfitC;
