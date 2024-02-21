import {
  StyleSheet,
  View
} from "react-native";
import { Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Fichier à modifier directement dans le contenu pour créer une modale dédiée

export default function ModalGrey() {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalGrey}>
      </View>
    </View>
  );
}

// À importer dans une View classique et non pas une SafeAreaView

const styles = StyleSheet.create({
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
  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#6B9080",
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
    color:"white",
  },
});
