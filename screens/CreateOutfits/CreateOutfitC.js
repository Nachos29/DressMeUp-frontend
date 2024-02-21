// Correspond à 3A-C du Figma

import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Text,
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
  PreviewListingBottom,
  PreviewListingTop,
  PreviewListingAccessories,
  PreviewListingShoes,
} from "../../Components/css/CardPreviewClothes";
import { FilterSubtypeAccessories, FilterSubtypeTop, FilterSubtypeBottom, FilterSubtypeShoes, FilterColor, FilterMaterialShoes, FilterMaterialBottom, FilterMaterialTop, FilterCut, FilterSeason, FilterRain, FilterEvent } from "../../Components/css/FilterClothes";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CreateOutfitC({ navigation }) {
  
  const dispatch = useDispatch();

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

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalFilters = () => {
    setModalVisible(!modalVisible);
  };

  const [showFilterSubtype, setShowFilterSubtype] = useState(false);
  const [showFilterColor, setShowFilterColor] = useState(false);
  const [showFilterEvent, setShowFilterEvent] = useState(false);
  const [showFilterMaterial, setShowFilterMaterial] = useState(false);
  const [showFilterCut, setShowFilterCut] = useState(false);
  const [showFilterSeason, setShowFilterSeason] = useState(false);
  const [showFilterRain, setShowFilterRain] = useState(false);

  const handleShowFilterSubtype = () => {
    setShowFilterSubtype(!showFilterSubtype);
    setShowFilterColor(false)
    setShowFilterEvent(false)
    setShowFilterMaterial(false)
    setShowFilterCut(false)
    setShowFilterSeason(false)
    setShowFilterRain(false)
  };

  const handleShowFilterColor = () => {
    setShowFilterColor(!showFilterColor);
    setShowFilterSubtype(false)
    setShowFilterEvent(false)
    setShowFilterMaterial(false)
    setShowFilterCut(false)
    setShowFilterSeason(false)
    setShowFilterRain(false)
  };

  const handleShowFilterEvent = () => {
    setShowFilterEvent(!showFilterEvent);
    setShowFilterSubtype(false)
    setShowFilterColor(false)
    setShowFilterMaterial(false)
    setShowFilterCut(false)
    setShowFilterSeason(false)
    setShowFilterRain(false)
  };

  const handleShowFilterMaterial = () => {
    setShowFilterMaterial(!showFilterMaterial);
    setShowFilterSubtype(false)
    setShowFilterColor(false)
    setShowFilterEvent(false)
    setShowFilterCut(false)
    setShowFilterSeason(false)
    setShowFilterRain(false)
  };

  const handleShowFilterCut = () => {
    setShowFilterCut(!showFilterCut);
    setShowFilterSubtype(false)
    setShowFilterColor(false)
    setShowFilterEvent(false)
    setShowFilterMaterial(false)
    setShowFilterSeason(false)
    setShowFilterRain(false)
  };

  const handleShowFilterSeason = () => {
    setShowFilterSeason(!showFilterSeason);
    setShowFilterSubtype(false)
    setShowFilterColor(false)
    setShowFilterEvent(false)
    setShowFilterCut(false)
    setShowFilterMaterial(false)
    setShowFilterRain(false)
  };

  const handleShowFilterRain = () => {
    setShowFilterRain(!showFilterRain);
    setShowFilterSubtype(false)
    setShowFilterColor(false)
    setShowFilterEvent(false)
    setShowFilterCut(false)
    setShowFilterMaterial(false)
    setShowFilterSeason(false)
  };

  const [selectedSubtype, setSelectedSubtype] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState(null)
  const [selectedCut, setSelectedCut] = useState(null)
  const [selectedSeason, setSelectedSeason] = useState(null)
  const [selectedRain, setSelectedRain] = useState(null)

  const handleSelectedSubType = (selectedSubtype) => {
    setShowFilterSubtype(!showFilterSubtype);
    setSelectedSubtype(selectedSubtype);
  };

  const handleSelectedColor = (selectedColor) => {
    setShowFilterColor(!showFilterColor);
    setSelectedColor(selectedColor);
  };

  const handleSelectedEvent = (selectedEvent) => {
    setShowFilterEvent(!showFilterEvent);
    setSelectedEvent(selectedEvent);
  }

  const handleSelectedMaterial = (selectedMaterial) => {
    setShowFilterMaterial(!showFilterMaterial);
    setSelectedMaterial(selectedMaterial);
  };

  const handleSelectedCut = (selectedCut) => {
    setShowFilterCut(!showFilterCut);
    setSelectedCut(selectedCut);
  };

  const handleSelectedSeason = (selectedSeason) => {
    setShowFilterSeason(!showFilterSeason);
    setSelectedSeason(selectedSeason);
  };

  const handleSelectedRain = (selectedRain) => {
    setShowFilterRain(!showFilterRain);
    setSelectedRain(selectedRain);
  };

  const handleSearchFilters = () => {
    navigation.navigate("CreateOutfitD", {maintype : outfitmaintype, subtype : selectedSubtype, color : selectedColor, material : selectedMaterial, cut : selectedCut, season : selectedSeason, rain : selectedRain, event : selectedEvent}) 
    handleResetFilters()
    setModalVisible(false)
  }

  const handleResetFilters = () => {
    setSelectedEvent(null)
    setSelectedSubtype(null)
    setSelectedColor(null)
    setSelectedMaterial(null)
    setSelectedCut(null)
    setSelectedSeason(null)
    setSelectedRain(null)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={handleModalFilters}>
          <View style={styles.modalContainer}>
            <View style={styles.modalFilters}>
              <View style={styles.modalFilterContainer}>
                <Text style={styles.filterTitle}>Filtres</Text>
                <TouchableOpacity style={selectedSubtype ? styles.buttonGreen : styles.buttonWhite} activeOpacity={0.8} onPress={handleShowFilterSubtype}>
                  <Text style={ selectedSubtype ? styles.textButton : styles.textButtonWhite}>{selectedSubtype ? "Sous-type : " + selectedSubtype : "Sous-type"}</Text>
                </TouchableOpacity>
                {outfitmaintype === "top" && showFilterSubtype && (<FilterSubtypeTop onSelectSubtype={handleSelectedSubType} />)}
                {outfitmaintype === "bottom" && showFilterSubtype && (<FilterSubtypeBottom onSelectSubtype={handleSelectedSubType} />)}
                {outfitmaintype === "shoes" && showFilterSubtype && (<FilterSubtypeShoes onSelectSubtype={handleSelectedSubType} />)}
                {outfitmaintype === "accessories" && showFilterSubtype && (<FilterSubtypeAccessories onSelectSubtype={handleSelectedSubType} />)}
                
                <TouchableOpacity style={selectedColor ? styles.buttonGreen : styles.buttonWhite} activeOpacity={0.8} onPress={handleShowFilterColor}>
                <Text style={ selectedColor ? styles.textButton : styles.textButtonWhite}>{selectedColor ? "Couleur : " + selectedColor.text : "Couleur"}</Text>
                </TouchableOpacity>
                {showFilterColor && (<FilterColor onSelectColor={handleSelectedColor} />)}

                <TouchableOpacity style={selectedEvent ? styles.buttonGreen : styles.buttonWhite} activeOpacity={0.8} onPress={handleShowFilterEvent}>
                <Text style={ selectedEvent ? styles.textButton : styles.textButtonWhite}>{selectedEvent ? "Event : " + selectedEvent.text : "Event"}</Text>
                </TouchableOpacity>
                {showFilterEvent && (<FilterEvent onSelectEvent={handleSelectedEvent} />)}


                {(outfitmaintype !== "accessories") && (
                <TouchableOpacity style={selectedMaterial ? styles.buttonGreen : styles.buttonWhite} activeOpacity={0.8} onPress={handleShowFilterMaterial}>
                  <Text style={ selectedMaterial ? styles.textButton : styles.textButtonWhite}>{selectedMaterial ? "Matière : " + selectedMaterial : "Matière"}</Text>
                </TouchableOpacity>)}
                {outfitmaintype === "top" && showFilterMaterial && (<FilterMaterialTop onSelectMaterial={handleSelectedMaterial} />)}
                {outfitmaintype === "bottom" && showFilterMaterial && (<FilterMaterialBottom onSelectMaterial={handleSelectedMaterial} />)}
                {outfitmaintype === "shoes" && showFilterMaterial && (<FilterMaterialShoes onSelectMaterial={handleSelectedMaterial} />)}
                

                {(outfitmaintype !== "accessories") && (
                <TouchableOpacity style={selectedCut? styles.buttonGreen : styles.buttonWhite} activeOpacity={0.8} onPress={handleShowFilterCut}>
                <Text style={ selectedCut ? styles.textButton : styles.textButtonWhite}>{selectedCut ? "Coupe : " + selectedCut : "Coupe"}</Text>
                </TouchableOpacity>)}
                {showFilterCut && (<FilterCut onSelectCut={handleSelectedCut} />)}

                {(outfitmaintype !== "accessories") && (
                <TouchableOpacity style={selectedSeason ? styles.buttonGreen : styles.buttonWhite} activeOpacity={0.8} onPress={handleShowFilterSeason} >
                <Text style={ selectedSeason ? styles.textButton : styles.textButtonWhite}>{selectedSeason ? "Saison : " + selectedSeason.text : "Saison"}</Text>
                </TouchableOpacity>)}
                {showFilterSeason && (<FilterSeason onSelectSeason={handleSelectedSeason} />)}
                
                {(outfitmaintype !== "accessories") && (
                <TouchableOpacity style={selectedRain ? styles.buttonGreen : styles.buttonWhite} activeOpacity={0.8} onPress={handleShowFilterRain}>
                <Text style={ selectedRain ? styles.textButton : styles.textButtonWhite}>{selectedRain ? "Pluie : " + selectedRain.text : "Pluie"}</Text>
                </TouchableOpacity>)}
                {showFilterRain && (<FilterRain onSelectRain={handleSelectedRain} />)}
              </View>
              
              <View style={styles.buttonFilters}>
                <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} onPress={handleSearchFilters}>
                  <Text style={styles.textButton}>Valider les filtres</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} onPress={handleResetFilters}>
                  <Text style={styles.textButton}>Effacer les filtres</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
        {outfitmaintype === "top" && (
          <PreviewListingTop handleTopOutfitSubmit={handleTopOutfitSubmit} />
        )}
        {outfitmaintype === "bottom" && (
          <PreviewListingBottom
            handleBottomOutfitSubmit={handleBottomOutfitSubmit}
          />
        )}
        {outfitmaintype === "shoes" && (
          <PreviewListingShoes
            handleShoesOutfitSubmit={handleShoesOutfitSubmit}
          />
        )}
        {outfitmaintype === "accessories" && (
          <PreviewListingAccessories
            handleAccessoryOutfitSubmit={handleAccessoryOutfitSubmit}
          />
        )}
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
