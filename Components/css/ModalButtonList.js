import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Fichier à modifier directement dans le contenu pour créer une modale dédiée

export default function ModalButtonList() {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalGrey}>
        <View style={styles.modalListContent}>
          <View style={styles.listItem}>
            <Text style={styles.categoryListTitle}>Hauts</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListText}>TEXT</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListText}>TEXT</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListTitle}>Bas</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListText}>TEXT</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListTitle}>Chaussures</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListText}>TEXT</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListTitle}>Accessoires</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListText}>TEXT</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListText}>TEXT</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.categoryListText}>TEXT</Text>
          </View>
        </View>
        <View style={styles.buttonDelete}>
          <TouchableOpacity style={styles.buttonGreenLight} activeOpacity={0.8}>
            <Text style={styles.textButton}>Supprimer la tenue</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent : "space-between"
  },
  modalListContent: {
    width: "90%",
  },
  categoryListText: {
    fontFamily: "Lora-SemiBold",
    color: "#6B9080",
    textAlign: "left",
    borderColor: "#6B9080",
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
  },
  categoryListTitle: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 20,
    color: "#6B9080",
  },
  listItem: {
    marginVertical: 2.5,
  },
  buttonGreenLight: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
    color:"black",
  },
  buttonDelete : {
    marginBottom : 70,
  }
});
