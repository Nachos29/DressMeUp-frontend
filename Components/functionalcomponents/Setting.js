import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Text, TouchableOpacity, Modal } from "react-native";
import { Dimensions } from "react-native";
import { Edit, PlusCircle } from "../css/Pictos";
import { AccountTopContainer } from "../css/TopContainer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Setting() {


  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <AccountTopContainer />

      <View style={styles.middlePart}>
        <View style={styles.circle}></View>
        <TouchableOpacity style={styles.buttonPlus}>
          <PlusCircle />
        </TouchableOpacity>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Mon pseudo</Text>
          <Text style={styles.info}></Text>
          <TouchableOpacity style={styles.edit}>
            <Edit />
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Mon email</Text>
          <Text style={styles.info}></Text>
          <TouchableOpacity style={styles.edit}>
            <Edit />
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Mon pseudo</Text>
          <Text style={styles.info}></Text>
          <TouchableOpacity style={styles.edit}>
            <Edit />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} >
        <Text style={styles.button}>Supprimer mon compte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8}>
        <Text style={styles.button}>Se déconnecter</Text>
      </TouchableOpacity>
      {/* onPress={openModal} à placer dans les props du bouton
      
      <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={closeModal}>
        <BlurView
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          blurType="light" // Vous pouvez utiliser "light", "dark" ou "extra light" pour le niveau de flou
          blurAmount={10} // Vous pouvez ajuster l'intensité du flou (entre 1 et 100)
        >
          {/* Contenu de votre modal */}
          {/*<View style={{ backgroundColor: "#fff", padding: 20 }}>
            <Text>Contenu de la modal</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text>Fermer</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.9,
    justifyContent: "space-evenly", // Alignement dans l'axe principale des différentes view et even
  },

  return: {
    paddingTop: "10%",
  },

  middlePart: {
    top: 20,
    bottom: 0, // Alignement en bas de l'écran
    alignItems: "center",
  },
  circle: {
    backgroundColor: "#D9D9D9",
    width: windowWidth * 0.4, // Utilisez des pourcentages pour définir la largeur du cercle
    height: windowWidth * 0.4, // Utilisez des pourcentages pour définir la hauteur du cercle
    borderRadius: (windowWidth * 0.4) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPlus: {
    alignItems: "center",
    flexGrow: 1,
    flexBasis: "10%",
    top: "-10%",
    left: "15%",
  },
  input: {
    bottom: "10%",
  },

  inputTitle: {
    fontFamily: "Lora-SemiBold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
  },

  edit: {
    left: "94%",
    top: 10,
  },

  info: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    fontFamily: "Lora-Regular",
    fontSize: 20,
  },

  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
    margin: 10,
    top: 10,
  },
  button: {
    fontFamily: "Lora-SemiBold",
  },
});
