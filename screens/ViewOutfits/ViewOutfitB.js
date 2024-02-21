import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Dimensions } from "react-native";
import { TopContainerListingOutfits } from "../../Components/css/TopContainer";
import { PreviewFilteredOutfit } from "../../Components/css/CardPreviewOutfit";
import { CardEventFilter } from "../../Components/css/CardEvent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ViewOutfitB({ navigation, route }) {
  const { eventSelected} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const outfits = useSelector((state) => state.outfits.outfits);

  const handleGoBack = () => {
    navigation.navigate("ViewOutfitA");
  };

  const handlePreview = (item) => {
    navigation.navigate("ViewOutfitC", { selectedItem: item });
  };

  const handleFilter = () => {
    navigation.navigate("ViewOutfitA");
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    if (outfits.length < 1) {
      navigation.navigate("HomeScreen");
    }
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalGrey}>
              <Text style={styles.filterTitle}>Filtres</Text>
              <CardEventFilter
                onSelectEvent={handleSelectEvent}
                selectedEvent={selectedEvent}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TopContainerListingOutfits handleGoBack={handleGoBack} />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.buttonGreen}
          activeOpacity={0.8}
          onPress={handleFilter}
        >
          <Text style={styles.textButtonWhite}>{eventSelected}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <PreviewFilteredOutfit route={route} handlePreview={handlePreview} />
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
    width: windowWidth,
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 10,
    rowGap: 10,
  },
  pictoFilter: {
    alignSelf: "center",
    transform: [{ rotate: "90deg" }],
  },
  filterContainer: {
    width: windowWidth * 0.9,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
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
  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#6B9080",
    borderColor: "#6B9080",
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
    color: "#6B9080",
  },
  textButtonWhite: {
    fontFamily: "Lora-SemiBold",
    color: "white",
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
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
});

export default ViewOutfitB;
