import { StyleSheet, TextInput, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Input() {
  return (
      <TextInput
        placeholder="Remplacez par ce que vous voulez"
        style={styles.input}
      />
  );
}

const styles = StyleSheet.create({
  input: {
    width: windowWidth * 0.9,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },
});
