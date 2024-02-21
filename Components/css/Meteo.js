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
const windowHeight = Dimensions.get("window").height;
const meteo = ["Oui", "Non"];


export default function Meteo({handleMeteo}) {

    const waterproof = useSelector((state) => state.clothes.temporaryClothe.waterproof)


    return (
        <View style={styles.filtersContainer}>
            <Text style={styles.filterTitle}>Adapté à la pluie ?</Text>
            <View style={styles.filterContainer}>
            {meteo.map((answer, index) => (
            <TouchableOpacity key={index} onPress={() => handleMeteo(meteo[index])}>
            <View style={meteo[index] === waterproof ? styles.filterButtonClicked: styles.filterButton}>
            <Text style={meteo[index] === waterproof ? styles.filterTextClicked: styles.filterText}>{answer}</Text>
            </View>
            </TouchableOpacity>
          ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    filtersContainer: {
        width: windowWidth * 0.9,
        alignContent: "center",
        paddingBottom: 20,
    },
    filterTitle: {
        fontSize: 18,
        fontFamily: "Lora-SemiBoldItalic",
        paddingBottom: 15,
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
