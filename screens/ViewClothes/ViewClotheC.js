// Correspond à 5A-C du Figma

import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import { TopContainerPicto } from "../../Components/css/TopContainer";
import { ButtonDelete } from "../../Components/css/ButtonGreenLight";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClothe } from "../../reducers/clothes";
import {BACKEND_URL} from '@env'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ViewClotheC({ navigation, route }) {

  const dispatch = useDispatch()
  
  const { selectedItem } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const clothesArray = useSelector((state) => state.clothes.clothes)

  const handleGoBack = () => {
    navigation.navigate("ViewClotheA");
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleDelete = (clothe) => {
    console.log("id to delete", clothe.id)
    fetch(`https://${BACKEND_URL}/clothes`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clotheId: clothe.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(deleteClothe(clothe.id))
          console.log("clothes after delete", clothesArray)
          setModalVisible(!true)
          navigation.navigate('HomeScreen')
        }
      }
      )
  }

  const eventDisplayNameMap = {
    casual: "Casual",
    work: "Work",
    sport: "Sport",
    party: "Soirée",
  };

  const seasonDisplayNameMap = {
    spring: "Printemps",
    summer: "Été",
    fall: "Automne",
    winter: "Hiver",
  };

  return (
    <View style={styles.mainContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.popupContainer}>
          <View style={styles.popupContent}>
            <Text style={styles.textContent}>
              Attention la suppression de ce vêtement entraînera la suppression
              de toutes les tenues associées. Voulez-vous continuer ?
            </Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(selectedItem)}>
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
      <ImageBackground
        source={{ uri: selectedItem.image }}
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={10}
      >
        <View style={styles.insidePicture}>
          <TopContainerPicto handleGoBack={handleGoBack} />
          <Image style={styles.image} source={{ uri: selectedItem.image }} />
        </View>
      </ImageBackground>
      <View style={styles.modalContainer}>
        <View style={styles.modalGrey}>
          <View>
            <Text style={styles.title}>{selectedItem.name}</Text>
          </View>
          <View>
            <Text style={styles.filterTitle}>Sous-type</Text>
            <View style={styles.filterContainer}>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>{selectedItem.subtype}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.filterTitle}>Marque</Text>
            <View style={styles.filterContainer}>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>{selectedItem.brand}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.filterTitle}>Couleur</Text>
            <View
              style={[
                styles.colorRound,
                { backgroundColor: selectedItem.color.hexa },
              ]}
            />
          </View>
          {selectedItem.cut || selectedItem.material || selectedItem.event ? (
            <View style={styles.filtersContainer}>
              <Text style={styles.filterTitle}>
                Informations supplémentaires
              </Text>
              <View style={styles.filterContainer}>
                {selectedItem.cut && (
                  <View style={styles.filterButton}>
                    <Text style={styles.filterText}>
                      {selectedItem.cut}
                    </Text>
                  </View>
                )}
                {selectedItem.material && (
                  <View style={styles.filterButton}>
                    <Text style={styles.filterText}>
                      {selectedItem.material}
                    </Text>
                  </View>
                )}
                {selectedItem.event &&
                  Object.keys(selectedItem.event).map(
                    (eventName, index) =>
                      selectedItem.event[eventName] && (
                        <View key={index} style={styles.filterButton}>
                          <Text style={styles.filterText}>
                            {eventDisplayNameMap[eventName] || eventName}
                          </Text>
                        </View>
                      )
                  )}
                {selectedItem.season &&
                  Object.keys(selectedItem.season).map(
                    (seasonName, index) =>
                      selectedItem.season[seasonName] && (
                        <View key={index} style={styles.filterButton}>
                          <Text style={styles.filterText}>
                            {seasonDisplayNameMap[seasonName] || seasonName}
                          </Text>
                        </View>
                      )
                  )}
              </View>
            </View>
          ) : null}
          <ButtonDelete handleModal={handleModal} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
  },
  imageBackground: {
    height: windowHeight * 0.5,
    justifyContent: "flex-start",
    paddingTop: 50,
    width: "100%",
  },
  insidePicture: {
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
  },
  modalGrey: {
    paddingTop: 20,
    height: windowHeight * 0.65,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    rowGap: 10,
  },
  title: {
    fontFamily: "Lora-Bold",
    fontSize: 25,
  },
  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
    paddingBottom: 20,
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
  filterContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    rowGap: 5,
    columnGap: 7,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: "#6B9080",
    borderWidth: 1,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 12,
    fontFamily: "Lora-Medium",
    color: "#6B9080",
  },
  colorsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
    rowGap: 20,
    columnGap: 10,
  },
  colorRound: {
    height: 35,
    width: 35,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: "center",
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

export default ViewClotheC;
