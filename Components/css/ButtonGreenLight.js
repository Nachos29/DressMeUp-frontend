import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

function ButtonGreenLight() {
  return (
    <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8}>
      <Text style={styles.textButton}>TEXT BUTTON</Text>
    </TouchableOpacity>
  );
}

function ButtonNextStep({ handleTopSubmit, handleClotheName }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonGreen}
        activeOpacity={0.8}
        onPress={() => {
          handleTopSubmit(), handleClotheName();
        }}
      >
        <Text style={styles.textButton}>Étape suivante</Text>
      </TouchableOpacity>
    </View>
  );
}

function ButtonNextStepOutfit({ handleTopSubmit }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonGreen}
        activeOpacity={0.8}
        onPress={handleTopSubmit}
      >
        <Text style={styles.textButton}>Étape suivante</Text>
      </TouchableOpacity>
    </View>
  );
}

function ButtonValidate({handleModalView}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} onPress={handleModalView}>
        <Text style={styles.textButton}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

function ButtonDelete({ handleModal}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonGreen}
        activeOpacity={0.8}
        onPress={handleModal}
      >
        <Text style={styles.textButton}>Supprimer le vêtement</Text>
      </TouchableOpacity>
    </View>
  );
}

function ButtonAddClothes({ handleAddClotheToOutfit }) {
  return (
    <View style={styles.doubleButtonContainer}>
      <TouchableOpacity
        style={styles.buttonGreen}
        activeOpacity={0.8}
        onPress={handleAddClotheToOutfit}
      >
        <Text style={styles.textButton}>Ajouter un élément</Text>
      </TouchableOpacity>
    </View>
  );
}

function ButtonValidateOutfit({ handleValidateOutfit }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonGreen}
        activeOpacity={0.8}
        onPress={handleValidateOutfit}
      >
        <Text style={styles.textButton}>Valider la tenue</Text>
      </TouchableOpacity>
    </View>
  );
}

function ButtonImport({handlePictureImport}) {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonGreenImport} activeOpacity={0.8} onPress={handlePictureImport}>
      <Text style={styles.textButtonImport}>Importer une photo</Text>
    </TouchableOpacity>  
    </View>
  );
}

function ButtonSkip({handleSkip, handleClotheName}) {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} onPress={() =>{handleSkip(), handleClotheName()}}>
      <Text style={styles.textButton}>Étape suivante</Text>
    </TouchableOpacity>  
    </View>
  );
}

export {
  ButtonGreenLight,
  ButtonNextStep,
  ButtonValidate,
  ButtonAddClothes,
  ButtonValidateOutfit,
  ButtonNextStepOutfit,
  ButtonDelete,
  ButtonSkip,
  ButtonImport,
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 30,
  },
  doubleButtonContainer: {
    paddingBottom: 10,
  },
  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
  },
  buttonGreenImport: {
    width: windowWidth * 0.8,
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
  },
  textButtonImport: {
    fontFamily: "Lora-SemiBold",
    color: 'white',
  },
});
