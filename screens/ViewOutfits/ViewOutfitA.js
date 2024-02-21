// Correspond à 5A-A du Figma

// Topcontainer coder en dur, il faut prévoir un composant spécifique à importer plutôt
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
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
import { TopContainerListingOutfits } from "../../Components/css/TopContainer";
import { PreviewAllOutfit } from "../../Components/css/CardPreviewOutfit";
import { Dimensions } from "react-native";
import { useState } from "react";
import { CardEventFilter } from "../../Components/css/CardEvent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ViewOutfitA({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleGoBack = () => {
    navigation.navigate("HomeScreen");
  };

  const handlePreview = (item) => {
    navigation.navigate("ViewOutfitC", { selectedItem: item });
  };

  const handleFilter = () => {
    setModalVisible(!modalVisible);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event); 
    setShouldCloseModal(true);
  };

  // Déclare un état qui indique si le modal devrait être fermé après un délai
  const [shouldCloseModal, setShouldCloseModal] = useState(false);

  // Surveille les changements dans l'état shouldCloseModal
  useEffect(() => {
    // Si shouldCloseModal est vrai
    if (shouldCloseModal) {
      // Crée un timeout qui exécute le code après 1 seconde
      const timeout = setTimeout(() => {
        // Réinitialise l'état shouldCloseModal
        setShouldCloseModal(false);
        // Ferme le modal et envoie les props event / eventSelected (indispensable pour le rendu du componant/screen)
        setModalVisible(false);
        if (selectedEvent === "Soirée") {
          navigation.navigate("ViewOutfitB", { event: "party", eventSelected : selectedEvent });
        } else if (selectedEvent === "Work") {
          navigation.navigate("ViewOutfitB", { event: "work", eventSelected : selectedEvent });
        } else if (selectedEvent === "Casual") {
          navigation.navigate("ViewOutfitB", { event: "casual", eventSelected : selectedEvent });
        } else {
          navigation.navigate("ViewOutfitB", { event: "sport", eventSelected : selectedEvent });
        }
        }, 1000);

      // Nettoie le délai en cas de démontage du composant ou de modification de l'état
      return () => clearTimeout(timeout);
    }
  }, [shouldCloseModal, selectedEvent, navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={handleFilter}>
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
          style={styles.buttonWhite}
          activeOpacity={0.8}
          onPress={handleFilter}
        >
          <Text style={styles.textButton}>Filtres</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <PreviewAllOutfit handlePreview={handlePreview} />
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
  textButton: {
    fontFamily: "Lora-SemiBold",
    color: "#6B9080",
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

export default ViewOutfitA;