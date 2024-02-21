import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function ButtonFilters() {
  return (
    <TouchableOpacity style={styles.buttonWhite} activeOpacity={0.8}>
      <Text style={styles.textButtonWhite}>TEXT BUTTON</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWhite: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
  },
  textButtonWhite: {
    fontFamily: "Lora-SemiBold",
    color:"#6B9080",
  },
});
