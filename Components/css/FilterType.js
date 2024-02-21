import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;

const clothesShapes = ["Ajusté", "Oversized", "Regular", "Skinny", "Slim"];

function FilterShapeClothes({handleShapeInput}) {

  const shape = useSelector((state) => state.clothes.temporaryClothe.cut)

  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>Quelle est la coupe de votre habit ?</Text>
      <View style={styles.filterContainer}>
        {clothesShapes.map((clotheShape, index) => (
          <TouchableOpacity key={index} onPress={() => handleShapeInput(clothesShapes[index])}>
          <View style={clothesShapes[index] === shape ? styles.filterButtonClicked: styles.filterButton}>
          <Text style={clothesShapes[index] === shape ? styles.filterTextClicked: styles.filterText}>{clotheShape}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}


export {FilterShapeClothes };

const styles = StyleSheet.create({
  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
  },
  filterTitle: {
    fontSize: 18,
    fontFamily : "Lora-SemiBoldItalic",
    paddingBottom : 15,
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
    paddingVertical: 10,
    borderColor: "#6B9080",
    borderWidth: 1,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 12,
    fontFamily: "Lora-Medium",
    color: "#6B9080",
  },
  filterButtonClicked: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#6B9080",
    borderColor: "#6B9080",
    borderWidth: 1,
    borderRadius: 20,
  },
  filterTextClicked: {
    fontSize: 12,
    fontFamily: "Lora-Medium",
    color: "white",
  },
});
