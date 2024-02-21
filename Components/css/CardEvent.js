import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import {
  EventParty,
  EventSport,
  EventCasual,
  EventWork,
  EventPartyWhite,
  EventSportWhite,
  EventCasualWhite,
  EventWorkWhite,
} from "./Pictos";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CardEvent({ isSelected }) {
  
  const [cardStates, setCardStates] = useState([
    { isClicked: false }, // Soirée
    { isClicked: false }, // Sport
    { isClicked: false }, // Casual
    { isClicked: false }, // Work
  ]);

  const events = [
    { Picto: <EventParty />, PictoWhite: <EventPartyWhite />, Text: "Soirée" },
    { Picto: <EventSport />, PictoWhite: <EventSportWhite />, Text: "Sport" },
    {
      Picto: <EventCasual />,
      PictoWhite: <EventCasualWhite />,
      Text: "Casual",
    },
    { Picto: <EventWork />, PictoWhite: <EventWorkWhite />, Text: "Work" },
  ];

  const handlePress = (index) => {
    const updatedCardStates = [...cardStates];
    updatedCardStates[index].isClicked = !updatedCardStates[index].isClicked;
    setCardStates(updatedCardStates);
  };

  return (
    <View style={styles.cardsEventContainer}>
      {events.map((event, index) => (
        <View
          key={index}
          style={
            cardStates[index].isClicked
              ? styles.cardEventContainerClicked
              : styles.cardEventContainer
          }
        >
          <TouchableOpacity
            onPress={() => {
              isSelected(event.Text), handlePress(index);
            }}
          >
            <Text style={{ alignSelf: "center" }}>
              {cardStates[index].isClicked ? (
                <View style={styles.pictoEvent}>{event.PictoWhite}</View>
              ) : (
                <View style={styles.pictoEvent}>{event.Picto}</View>
              )}
            </Text>
            <View>
              <Text
                style={
                  cardStates[index].isClicked
                    ? styles.cardEventTextClicked
                    : styles.cardEventText
                }
              >
                {event.Text}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

function CardEventFilter({onSelectEvent, selectedEvent}) {
  const events = [
    { Picto: <EventParty />, PictoWhite: <EventPartyWhite />, Text: "Soirée", },
    { Picto: <EventSport />, PictoWhite: <EventSportWhite />, Text: "Sport", },
    { Picto: <EventCasual />, PictoWhite: <EventCasualWhite />, Text: "Casual", },
    { Picto: <EventWork />, PictoWhite: <EventWorkWhite />, Text: "Work", },
  ];

  const handlePress = (event) => {
    onSelectEvent(event.Text)
  };

  return (
    <View style={styles.cardsEventContainer}>
      {events.map((event, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(event)}
          style={
            selectedEvent === event.Text
              ? styles.cardEventContainerClicked
              : styles.cardEventContainer
          }
        >
          <Text style={{ alignSelf: "center" }}>
            {selectedEvent === event.Text ? (
              <View style={styles.pictoEvent}>{event.PictoWhite}</View>
            ) : (
              <View style={styles.pictoEvent}>{event.Picto}</View>
            )}
          </Text>
          <View>
            <Text
              style={
                selectedEvent === event.Text
                  ? styles.cardEventTextClicked
                  : styles.cardEventText
              }
            >
              {event.Text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export { CardEvent, CardEventFilter };

const styles = StyleSheet.create({
  cardsEventContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    rowGap: 30,
    columnGap: 10,
    width: windowWidth * 0.9,
  },
  cardEventContainer: {
    width: "45%",
    height: windowHeight * 0.3,
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    alignContent: "center",
    justifyContent: "center",
  },
  cardEventText: {
    paddingTop: 50,
    textAlign: "center",
    fontFamily: "Lora-SemiBold",
    fontSize: 20,
    color: "#6B9080",
  },
  pictoEvent: {
    alignItems: "center",
  },
  pictoEventClicked: {
    alignItems: "center",
    color: "white",
  },
  cardEventContainerClicked: {
    width: "45%",
    height: windowHeight * 0.3,
    borderRadius: 10,
    backgroundColor: "#6B9080",
    alignContent: "center",
    justifyContent: "center",
  },
  cardEventTextClicked: {
    paddingTop: 50,
    textAlign: "center",
    fontFamily: "Lora-SemiBold",
    fontSize: 20,
    color: "white",
  },
});
