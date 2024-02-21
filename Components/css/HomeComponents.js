import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { PlusCircle } from "./Pictos";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function AddFirstClothe({ handleCreateClosePress }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes vêtements</Text>
      </View>
      <View style={styles.cardAddClothes}>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>
            Ajoutez votre premier vêtement.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/Dressing.png")}
          />
        </View>
      </View>
      <View style={styles.buttonPlus}>
        <TouchableOpacity activeOpacity={0.5} onPress={handleCreateClosePress}>
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </>
  );
}

function ViewClothe(props) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes vêtements</Text>
      </View>
      <TouchableOpacity onPress={props.handleViewClothesPress}>
        <View style={styles.cardAddClothes}>
          <View style={styles.textContainer}>
            <Text style={styles.textContent}>
              Consultez tous vos vêtements.
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/images/Dressing.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonPlus}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={props.handleCreateClosePress}
        >
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </>
  );
}

function NoOutfits() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes tenues</Text>
      </View>
      <View style={styles.cardAddClothes}>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>
            Ajoutez au moins deux vêtements pour créer votre première tenue.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/tenue.png")}
          />
        </View>
      </View>
    </>
  );
}

function FirstOutfit(props) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes tenues</Text>
      </View>
      <View style={styles.cardAddClothes}>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>Ajoutez votre première tenue.</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/tenue.png")}
          />
        </View>
      </View>
      <View style={styles.buttonPlus}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={props.handleCreateOutfitsPress}
        >
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </>
  );
}

function MyOutfits(props) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes tenues</Text>
      </View>
      <TouchableOpacity onPress={props.handleViewOutfitPress}>
        <View style={styles.cardAddClothes}>
          <View style={styles.textContainer}>
            <Text style={styles.textContent}>Consultez toutes vos tenues.</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/images/tenue.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonPlus}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={props.handleCreateOutfitsPress}
        >
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </>
  );
}

function NoFav() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes tenues favorites</Text>
      </View>
      <View style={styles.cardAddClothes}>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>
            Vous n'avez pas encore de tenues favorites.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/fav.png")}
          />
        </View>
      </View>
    </>
  );
}

function AddFirstFav(props) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes tenues favorites</Text>
      </View>
      <View style={styles.cardAddClothes}>
        <View style={styles.textContainer}>
          <Text style={styles.textContent}>
            Ajoutez une première tenue à vos tenues favorites.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/fav.png")}
          />
        </View>
      </View>
      <View style={styles.buttonPlus}>
        <TouchableOpacity activeOpacity={0.5} onPress={props.handleCreateFav}>
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </>
  );
}

function MyFirstFav({ handleCreateFav, handlePreview }) {
  const outfits = useSelector((state) => state.outfits.favoriteArray);

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes tenues favorites</Text>
      </View>
      <View style={styles.cardAddTwoFav}>
        {outfits.map((outfit, index) => (
          <TouchableOpacity key={index} onPress={() => handlePreview(outfit)}>
            <View style={styles.cardFav}>
              <Image
                source={{ uri: outfit.image }}
                style={styles.imageFavOutfit}
              />
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.oneFavContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.favPress}
            onPress={handleCreateFav}
          >
            <PlusCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.imageFav}
            source={require("../../assets/images/fav.png")}
          />
        </View>
      </View>
    </>
  );
}

function TwoFav(props) {
  const outfits = useSelector((state) => state.outfits.favoriteArray);

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes tenues favorites</Text>
      </View>
      <View style={styles.cardAddTwoFav}>
        {outfits.map((outfit, index) => (
          <TouchableOpacity key={index} onPress={() => handlePreview(outfit)}>
            <View style={styles.cardFav}>
              <Image
                source={{ uri: outfit.image }}
                style={styles.imageFavOutfit}
              />
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.oneFavContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.favPress}
            onPress={props.handleCreateFav}
          >
            <PlusCircle />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function MoreThanTwoFav({ handleCreateFav, handleViewFav }) {
  const outfits = useSelector((state) => state.outfits.favoriteArray);

  return (
    <>
      <View>
        <Text style={styles.titleMoreTwoFav}>Mes tenues favorites</Text>
      </View>
      <View style={styles.cardAddFav}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardMoreTwoFavScroll}
        >
          {outfits.map((outfit, index) => (
            <TouchableOpacity key={index} onPress={() => handleViewFav(outfit)}>
              <View style={styles.cardFav}>
                <Image
                  source={{ uri: outfit.image }}
                  style={styles.imageFavOutfit}
                />
              </View>
            </TouchableOpacity>
          ))}
           <View style={styles.cardFavPlus}>
            <TouchableOpacity activeOpacity={0.5} onPress={handleCreateFav}>
              <PlusCircle />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardAddClothes: {
    width: "100%",
    height: windowHeight * 0.15,
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontFamily: "Lora-Bold",
    color: "black",
    textAlign: "left",
    fontSize: 20,
  },
  textContent: {
    fontFamily: "Lora-Regular",
    fontSize: 15,
    color: "black",
    textAlign: "left",
    alignItems: "center",
  },
  buttonPlus: {
    marginTop: -windowHeight * 0.055,
    alignSelf: "center",
  },
  image: {
    bottom: "20%",
  },
  cardOneFav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "column",
    width: "40%",
  },
  cardsAddFav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  favPress: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageFav: {
    alignSelf: "flex-start",
  },
  fav: {
    width: "30%",
    backgroundColor: "#CCE3DE",
    borderRadius: 10,
    justifyContent: "space-around",
  },
  titleContainer: {
    marginBottom: -windowHeight * 0.02,
  },
  cardAddTwoFav: {
    width: "100%",
    height: windowHeight * 0.15,
    borderRadius: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardMoreTwoFav: {
    width: "100%",
    columnGap: 20,
    height: windowHeight * 0.15,
    borderRadius: 10,
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal : 10,
  },
  cardMoreTwoFavScroll : {
    columnGap: 20,
    height: windowHeight * 0.15,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal : 10,
  },
  oneFavContainer: {
    height: "100%",
    width: "30%",
    backgroundColor: "#CCE3DE",
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  smallCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  favScroll: {
    backgroundColor: "#CCE3DE",
    borderRadius: 10,
    height: "100%",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  imageFavOutfit: {
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  cardFav: {
    width: windowWidth * 0.27,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  titleMoreTwoFav: {
    fontFamily: "Lora-Bold",
    color: "black",
    textAlign: "left",
    fontSize: 20,
    marginBottom : -20,
  },
  cardFavPlus: {
    width: windowWidth * 0.27,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    justifyContent : "center",
    alignItems: "center"
  },

});

export {
  AddFirstClothe,
  AddFirstFav,
  ViewClothe,
  NoOutfits,
  FirstOutfit,
  MyOutfits,
  NoFav,
  MyFirstFav,
  TwoFav,
  MoreThanTwoFav,
};