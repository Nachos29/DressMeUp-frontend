import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Spring, Summer, Autumn, Winter, SpringWhite, SummerWhite, AutumnWhite, WinterWhite } from "./Pictos";
import { useState } from "react";

function FilterSeason({isSelected}) {

  const [cardStates, setCardStates] = useState([
    { isClicked: false }, // Soirée
    { isClicked: false }, // Sport
    { isClicked: false }, // Casual
    { isClicked: false }, // Work
  ]);

  const seasons = [
    { Picto: <Spring />, PictoWhite: <SpringWhite />, Text: "Printemps" },
    { Picto: <Summer />, PictoWhite: <SummerWhite />, Text: "Été" },
    { Picto: <Autumn />, PictoWhite: <AutumnWhite />, Text: "Automne" },
    { Picto: <Winter />, PictoWhite: <WinterWhite />, Text: "Hiver" },
  ];

  const handlePress = (index) => {
    const updatedCardStates = [...cardStates];
    updatedCardStates[index].isClicked = !updatedCardStates[index].isClicked;
    setCardStates(updatedCardStates);
  };

  return (
    <View style={styles.seasonContainer}>
      <Text style={styles.filtersSeasonTitle}>Pour quelle(s) saison(s) ?</Text>
      <View style={styles.filtersSeasonContainer}>
      {seasons.map((season, index) => (
        <View key={index} style={cardStates[index].isClicked ? styles.filterSeasonContainerClicked : styles.filterSeasonContainer}>
        <TouchableOpacity onPress={() => {isSelected(season.Text), handlePress(index)}}>
        <Text style={{alignSelf: "center"}}>
      { cardStates[index].isClicked ? <View style={styles.pictoEvent}>{season.PictoWhite}</View> : <View style={styles.pictoEvent}>{season.Picto}</View>} 
      </Text>
          <View>
          <Text style={cardStates[index].isClicked ? styles.cardSeasonTextClicked : styles.cardSeasonText}>{season.Text}</Text>
          </View>
          </TouchableOpacity>
        </View>
      ))}
      </View>
    </View>
  );
}

export { FilterSeason };

const styles = StyleSheet.create({

  seasonContainer :{
    height: "20%",
    alignContent : "center"
  },
  filtersSeasonContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: "5%",
    justifyContent: "center",
  },
  filterSeasonContainer: {
    borderWidth: 1,
    borderColor : '#6B9080',
    width: "20%",
    height : "70%",
    borderRadius: 10,
    backgroundColor: "#EAF4F4",
    alignContent: "center",
    justifyContent: "space-around",
  },
  filterSeasonContainerClicked: {
    borderWidth: 1,
    borderColor : '#6B9080',
    width: "20%",
    height : "70%",
    borderRadius: 10,
    backgroundColor: "#6B9080",
    alignContent: "center",
    justifyContent: "space-around",
  },
  cardSeasonText: {
    textAlign: "center",
    fontFamily: "Lora-SemiBold",
    fontSize: 12,
    color: "#6B9080",
  },
  cardSeasonTextClicked: {
    textAlign: "center",
    fontFamily: "Lora-SemiBold",
    fontSize: 12,
    color: "white",
  },
  pictoEvent: {
    alignItems: "center",
  },
  filtersSeasonTitle : {
    fontSize: 18,
    fontFamily : "Lora-SemiBoldItalic",
    paddingBottom : 15,
    textAlign: "center",
  },
});