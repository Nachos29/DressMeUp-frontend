import { useDispatch, useSelector } from "react-redux";
import { useIsFocused} from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { Settings } from "../Components/css/Pictos";
import { PushFromDBToClothesStore, resetClothesStore } from "../reducers/clothes";
import { PushFromDBToOutfitStore, pushFromDbToFavArray, resetFavorite, resetOutfitStore } from "../reducers/outfits";
import {
  AddFirstClothe,
  NoOutfits,
  NoFav,
  FirstOutfit,
  ViewClothe,
  MyOutfits,
  AddFirstFav,
  MyFirstFav,
  TwoFav,
  MoreThanTwoFav,
} from "../Components/css/HomeComponents";
import { useEffect } from "react";
import {BACKEND_URL} from '@env'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function HomeUser({ navigation }) {

  const dispatch = useDispatch()
  const isFocused = useIsFocused();

  const clothes = useSelector((state) => state.clothes.clothes)
  const outfits = useSelector((state) => state.outfits.outfits)
  const favorites = useSelector((state) => state.outfits.favoriteArray)

  useEffect(() => {
    if (isFocused) {

       dispatch(resetClothesStore());
  
       dispatch(resetOutfitStore());

      dispatch(resetFavorite())
  
       fetch(`https://${BACKEND_URL}/users/clothes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user.username }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(PushFromDBToClothesStore(data));
        });
  
       fetch(`https://${BACKEND_URL}/users/outfits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user.username }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(PushFromDBToOutfitStore(data));
          console.log("data is favorite from back", data)
          dispatch(pushFromDbToFavArray(data))
        });

    };

    }
  , [isFocused]);
  


  const user = useSelector((state) => state.user.value);

  const clothesCount = clothes.length
  const outfitsCount = outfits.length
  const favoritesCount = favorites.length

  const handleSettingsPress = () => {
    navigation.navigate("UserProfileScreen");
  };

  const handleCreateClosePress = () => {
    navigation.navigate("CreateClotheA");
  };

  const handleViewClothesPress = () => {
    navigation.navigate("ViewClotheA");
  };

  const handleCreateOutfitsPress = () => {
    navigation.navigate("CreateOutfitA");
  };

  const handleViewOutfitPress = () => {
    navigation.navigate("ViewOutfitA");
  };

  const handleCreateFav = () => {
    navigation.navigate("ViewOutfitA");
  };

  const handleViewFav = (outfit) => {
    navigation.navigate("ViewOutfitC", {selectedItem : outfit});
  };

  const handlePreview = (outfit) => {
    navigation.navigate("ViewOutfitC", { selectedItem : outfit})
  }

  let screenToRender;
  function handleHomeScreen() {
    if ( clothesCount === 0 )
      return (screenToRender = (
        <>
          <AddFirstClothe handleCreateClosePress={handleCreateClosePress} />
          <NoOutfits />
          <NoFav />
        </>
      ));

    // case user.clothes.length === 1:

    if (clothesCount === 1)
      return (screenToRender = (
        <>
          <ViewClothe handleViewClothesPress={handleViewClothesPress} handleCreateClosePress={handleCreateClosePress} />
          <NoOutfits />
          <NoFav />
        </>
      ));

    // case clothes.length >= 2
    // && userArray.outfit.length === 0
    
    if (clothesCount >= 2 && outfitsCount === 0 )
    return (screenToRender = (
      <>
        <FirstOutfit handleCreateOutfitsPress={handleCreateOutfitsPress} />
        <ViewClothe handleViewClothesPress={handleViewClothesPress} handleCreateClosePress={handleCreateClosePress} />
        <NoFav />
      </>
    ));

    // case userArray.outfit.length >= 1 && userArray.fav.length === 0:
    if (outfitsCount >= 1 && favoritesCount === 0)
      return (screenToRender = (
        <>
          <MyOutfits handleViewOutfitPress={handleViewOutfitPress} handleCreateOutfitsPress={handleCreateOutfitsPress}/>
          <AddFirstFav handleCreateFav={handleCreateFav}/>
          <ViewClothe handleViewClothesPress={handleViewClothesPress} handleCreateClosePress={handleCreateClosePress}/>
        </>
      ));

    // case userArray.fav.length === 1:
    if (favoritesCount === 1)
      return (screenToRender = (
        <>
          <MyOutfits handleViewOutfitPress={handleViewOutfitPress} handleCreateOutfitsPress={handleCreateOutfitsPress}/>
          <MyFirstFav handleCreateFav={handleCreateFav} handleViewFav={handleViewFav} handlePreview={handlePreview}/>
          <ViewClothe handleViewClothesPress={handleViewClothesPress} handleCreateClosePress={handleCreateClosePress}/>
        </>
      ));

    // case userArray.fav.length === 2:
    if (favoritesCount === 2)
      return (screenToRender = (
        <>
          <MyOutfits handleViewOutfitPress={handleViewOutfitPress} handleCreateOutfitsPress={handleCreateOutfitsPress}/>
          <TwoFav handleCreateFav={handleCreateFav} handleViewFav={handleViewFav}/>
          <ViewClothe handleViewClothesPress={handleViewClothesPress} handleCreateClosePress={handleCreateClosePress}/>
        </>
      ));

    // case userArray.fav.length > 2:
    if (favoritesCount > 2)
      return (screenToRender = (
        <>
          <MyOutfits handleViewOutfitPress={handleViewOutfitPress} handleCreateOutfitsPress={handleCreateOutfitsPress}/>
          <MoreThanTwoFav handleCreateFav={handleCreateFav} handleViewFav={handleViewFav}/>
          <ViewClothe handleViewClothesPress={handleViewClothesPress} handleCreateClosePress={handleCreateClosePress}/>
        </>
      ));
  }

  handleHomeScreen();

  const usernameFormatted = user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.head}>
        <Text style={styles.welcome}>Hello {usernameFormatted}</Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.settings} onPress={handleSettingsPress}>
          <Settings />
        </TouchableOpacity>
      </View>
       <View style={styles.cardAddClothesContainer}>
       {screenToRender}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    width: "90%",
    marginBottom: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  settings: {
    paddingTop: 12,
  },
  cardAddClothesContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.7,
    justifyContent: "space-around",
  },
  welcome: {
    fontFamily: "Lora-Bold",
    fontSize: 30,
  },
});

export default HomeUser;