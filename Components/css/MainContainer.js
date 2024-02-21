import React from "react";
import { StyleSheet, View } from "react-native";

export default function MainContainer() {
  return (
    <View style={styles.mainContainer}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
  },
});
