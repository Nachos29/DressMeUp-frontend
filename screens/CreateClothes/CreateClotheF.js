// Correspond à 2A-F sur Figma

import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer'
import { ButtonValidate } from '../../Components/css/ButtonGreenLight';
import { useDispatch, useSelector } from 'react-redux';
import { saveClothe, setId } from '../../reducers/clothes';
import {BACKEND_URL} from '@env'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


function CreateClotheF({ navigation }) {

  const dispatch = useDispatch()
  const picture = useSelector((state) => state.clothes.temporaryClothe.image)
  const clothes = useSelector((state) => state.clothes.temporaryClothe)
  const [modalVisible, setModalVisible] = useState(false);
  const username = useSelector((state) => state.user.value.username)

  const handleGoBack = () => {
    navigation.navigate("CreateClotheE");
  };

  const handleValidate = () => {
    setModalVisible(!true)
    const randomId = Math.random() * 1000
    dispatch(setId(randomId))
    console.log("id", randomId)
    fetch(`https://${BACKEND_URL}/clothes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: clothes.name,
        maintype: clothes.maintype,
        color: clothes.color,
        image: clothes.image,
        subtype: clothes.subtype,
        brand: clothes.brand,
        event: clothes.event,
        material: clothes.material,
        cut: clothes.cut,
        season: clothes.season,
        waterproof: clothes.waterproof,
        id: randomId,
        username: username,
      }),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.result) {
          navigation.navigate("ViewClotheA")
          dispatch(saveClothe());
        }
      });

  }
  const handleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const handleModalView = () =>{
    setModalVisible(true);
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
              Attention, vous ne pourrez pas modifier votre vêtement plus tard.
              Êtes-vous sur de vouloir le valider ?
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleValidate}
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
      <ImageBackground
        source={{ uri: picture }}
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={10}
      >
        <View style={styles.insidePicture}>
          <TopContainerPicto handleGoBack={handleGoBack} />
          <Image style={styles.image} source={{ uri: picture }} />
        </View>
      </ImageBackground>
      <View style={styles.modalContainer}>
        <View style={styles.modalGrey}>
          <View>
            <Text style={styles.title}>{clothes.name}</Text>
          </View>
          <View>
            <Text style={styles.filterTitle}>Sous-type</Text>
            <View style={styles.filterContainer}>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>{clothes.subtype}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.filterTitle}>Marque</Text>
            <View style={styles.filterContainer}>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>{clothes.brand}</Text>
              </View>
            </View>
          </View>
          {clothes.color ? 
          (<View>
            <Text style={styles.filterTitle}>Couleur</Text>
            <View
              style={[
                styles.colorRound,
                { backgroundColor: clothes.color.hexa },
              ]}
            />
          </View>
          ) : (null)}
          {clothes.cut || clothes.material || clothes.event ? (
            <View style={styles.filtersContainer}>
              <Text style={styles.filterTitle}>
                Informations supplémentaires
              </Text>
              <View style={styles.filterContainer}>
                {clothes.cut && (
                  <View style={styles.filterButton}>
                    <Text style={styles.filterText}>
                      {clothes.cut}
                    </Text>
                  </View>
                )}
                {clothes.material && (
                  <View style={styles.filterButton}>
                    <Text style={styles.filterText}>
                      {clothes.material}
                    </Text>
                  </View>
                )}
                {clothes.event &&
                  Object.keys(clothes.event).map(
                    (eventName, index) =>
                      clothes.event[eventName] && (
                        <View key={index} style={styles.filterButton}>
                          <Text style={styles.filterText}>
                            {eventDisplayNameMap[eventName] || eventName}
                          </Text>
                        </View>
                      )
                  )}
                {clothes.season &&
                  Object.keys(clothes.season).map(
                    (seasonName, index) =>
                      clothes.season[seasonName] && (
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
          <ButtonValidate handleModalView={handleModalView} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FFF8',
    alignItems: 'center',
  },
  imageBackground: {
    height: windowHeight * 0.5,
    justifyContent: "flex-start",
    paddingTop: 50,
    width: "100%",

  },
  insidePicture: {
    alignItems: "center"
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 5
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0
  },
  modalGrey: {
    paddingTop: 20,
    height: windowHeight * 0.65,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 10,
  },
  title: {
    fontFamily: 'Lora-Bold',
    fontSize: 25
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

})


export default CreateClotheF
