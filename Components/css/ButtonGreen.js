import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function ButtonGreen() {
  return (
    <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8}>
      <Text style={styles.textButton}>TEXT BUTTON</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
