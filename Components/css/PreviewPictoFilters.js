import {
    StyleSheet,
    View,
    Text
  } from "react-native";
  
  import { Dimensions } from "react-native";
  
  const windowWidth = Dimensions.get("window").width;
  
  const clothesShapes = ["Ajusté", "Oversized", "Regular", "Skinny", "Slim"];
 
  
  
  function FilterTypeClothes() {
    return (
      <View style={styles.filtersContainer}>
        <Text style={styles.filterTitle}>Quelle est la coupe de votre habit ?</Text>
        <View style={styles.filterContainer}>
          {clothesShapes.map((top, index) => (
            <View key={index} style={styles.filterButtonClicked}>
              <Text style={styles.filterTextClicked}>{top}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
  
  function FilterTypeShoes() {
    return (
      <View style={styles.filtersContainer}>
        <Text style={styles.filterTitle}>De quel type de chaussures s’agit-il ? *</Text>
        <View style={styles.filterContainer}>
          {shoes.map((haut, index) => (
            <View key={index} style={styles.filterButton}>
              <Text style={styles.filterText}>{haut}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
  
  export {FilterTypeClothes, FilterTypeShoes };
  
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
  