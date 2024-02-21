import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { EventCasualSmall, EventPartySmall, EventWorkSmall, EventSportSmall } from "./Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function PreviewAllOutfit({ handlePreview }) {
  const outfits = useSelector((state) => state.outfits.outfits);

  return (
    <>
      {outfits.map((outfit, index) => (
        <TouchableOpacity key={index} onPress={() => handlePreview(outfit)}>
          <View style={styles.cardOutfit}>
            <Image source={{ uri: outfit.image }} style={styles.image} />
            <View style={styles.pictoContainer}>
              {outfit.event.casual && <EventCasualSmall />}
              {outfit.event.party && <EventPartySmall/>}
              {outfit.event.work && <EventWorkSmall />}
              {outfit.event.sport &&<EventSportSmall />}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function PreviewFilteredOutfit({ handlePreview, route }) {

  const { event } = route.params;

  const outfits = useSelector((state) => state.outfits.outfits);
  const filteredOutfits = outfits.filter((outfit) => outfit.event[event]);

  return (
    <>
      {filteredOutfits.map((outfit, index) => (
        <TouchableOpacity key={index} onPress={() => handlePreview(outfit)}>
          <View style={styles.cardOutfit}>
            <Image source={{ uri: outfit.image }} style={styles.image} />
            <View style={styles.pictoContainer}>
              {outfit.event.casual && <EventCasualSmall />}
              {outfit.event.party && <EventPartySmall/>}
              {outfit.event.work && <EventWorkSmall />}
              {outfit.event.sport &&<EventSportSmall />}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

export { PreviewAllOutfit, PreviewFilteredOutfit };

const styles = StyleSheet.create({
  image: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  cardOutfit: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.237,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    elevation: 5,
  },
  pictoContainer: {
    width: "100%",
    height: 30,
    backgroundColor: "rgba(107, 144, 128, 0.8)",
    marginTop: -30,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    justifyContent: 'flex-end',
    paddingHorizontal : 5,
  },
});
