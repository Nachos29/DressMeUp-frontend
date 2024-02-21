import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;

const topMatiere = ["Coton", "Cuir", "Dentelle", "Laine", "Lin", "Soie", "Velours", "Autre"];

function FilterMaterialTop({handleMaterialInput}) {

  const material = useSelector((state) => state.clothes.temporaryClothe.material)
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>En quelle matière est votre habit ?</Text>
      <View style={styles.filterContainer}>
        {topMatiere.map((top, index) => (
          <TouchableOpacity key={index} onPress={() => handleMaterialInput(topMatiere[index])}>
          <View style={topMatiere[index] === material ? styles.filterButtonClicked: styles.filterButton}>
            <Text style={topMatiere[index] === material ? styles.filterTextClicked: styles.filterText}>{top}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function FilterMaterialBottom({handleMaterialInput}) {

  const material = useSelector((state) => state.clothes.temporaryClothe.material)
  const bottomMatiere = ["Coton", "Cuir", "Denim", "Dentelle", "Lin", "Soie", "Velours", "Autre"];

  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de bas s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {bottomMatiere.map((bottom, index) => (
          <TouchableOpacity key={index} onPress={() => handleMaterialInput(bottomMatiere[index])}>
          <View style={bottomMatiere[index] === material ? styles.filterButtonClicked: styles.filterButton}>
          <Text style={bottomMatiere[index] === material ? styles.filterTextClicked: styles.filterText}>{bottom}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export { FilterMaterialTop, FilterMaterialBottom };

const styles = StyleSheet.create({
  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
    paddingBottom : 20,
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