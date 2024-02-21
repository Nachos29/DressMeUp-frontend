import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";

const fetchFonts = async () => {
  await Font.loadAsync({
    "Lora-Regular": require("./assets/fonts/Lora/static/Lora-Regular.ttf"),
    "Lora-MediumItalic": require("./assets/fonts/Lora/static/Lora-MediumItalic.ttf"),
    "Lora-Bold": require("./assets/fonts/Lora/static/Lora-Bold.ttf"),
    "Lora-SemiBoldItalic": require("./assets/fonts/Lora/static/Lora-SemiBoldItalic.ttf"),
    "Lora-SemiBold": require("./assets/fonts/Lora/static/Lora-SemiBold.ttf"),
    "Lora-Medium": require("./assets/fonts/Lora/static/Lora-Medium.ttf"),

    // Vous pouvez charger d'autres polices ici si nécessaire
  });
};

import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import clothes from "./reducers/clothes";
import outfits from "./reducers/outfits";
// Pensez à importer vos reducers une fois qu'ils sont été exportés dans leurs fichiers respectifs

//import des différents screens
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import UserProfileScreen from "./screens/UserProfileScreen";

import CreateClotheA from "./screens/CreateClothes/CreateClotheA";
import CreateClotheB from "./screens/CreateClothes/CreateClotheB";
import CreateClotheC from "./screens/CreateClothes/CreateClotheC";
import CreateClotheD from "./screens/CreateClothes/CreateClotheD";
import CreateClotheE from "./screens/CreateClothes/CreateClotheE";
import CreateClotheF from "./screens/CreateClothes/CreateClotheF";
import SnapScreen from "./screens/SnapScreen";

import CreateOutfitA from "./screens/CreateOutfits/CreateOutfitA";
import CreateOutfitB from "./screens/CreateOutfits/CreateOutfitB";
import CreateOutfitC from "./screens/CreateOutfits/CreateOutfitC";
import CreateOutfitD from "./screens/CreateOutfits/CreateOutfitD";
import OverviewOutfit from "./screens/CreateOutfits/OverviewOutfit";

import ViewClotheA from "./screens/ViewClothes/ViewClotheA";
import ViewClotheB from "./screens/ViewClothes/ViewClotheB";
import ViewClotheC from "./screens/ViewClothes/ViewClotheC";
import ViewClotheD from "./screens/ViewClothes/ViewClotheD";

import ViewOutfitA from "./screens/ViewOutfits/ViewOutfitA";
import ViewOutfitB from "./screens/ViewOutfits/ViewOutfitB";
import ViewOutfitC from "./screens/ViewOutfits/ViewOutfitC";

// Fin de l'import des différents screens

const reducers = combineReducers({ user, clothes, outfits });
const persistConfig = { key: "DressMeUp", storage: AsyncStorage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />

            <Stack.Screen name= "CreateClotheA" component={CreateClotheA} />
            <Stack.Screen name="CreateClotheB" component={CreateClotheB} />
            <Stack.Screen name="CreateClotheC" component={CreateClotheC} />
            <Stack.Screen name="CreateClotheD" component={CreateClotheD} />
            <Stack.Screen name="CreateClotheE" component={CreateClotheE} />
            <Stack.Screen name="CreateClotheF" component={CreateClotheF} />
            <Stack.Screen name="SnapScreen" component={SnapScreen} />

            <Stack.Screen name="CreateOutfitA" component={CreateOutfitA} />
            <Stack.Screen name="CreateOutfitB" component={CreateOutfitB} />
            <Stack.Screen name="CreateOutfitC" component={CreateOutfitC} />
            <Stack.Screen name="CreateOutfitD" component={CreateOutfitD} />
            <Stack.Screen name="OverviewOutfit" component={OverviewOutfit} />

            <Stack.Screen name="ViewClotheA" component={ViewClotheA} /> 
            <Stack.Screen name="ViewClotheB" component={ViewClotheB} />
            <Stack.Screen name="ViewClotheC" component={ViewClotheC} />
            <Stack.Screen name="ViewClotheD" component={ViewClotheD} />

            <Stack.Screen name="ViewOutfitA" component={ViewOutfitA} />
            <Stack.Screen name="ViewOutfitB" component={ViewOutfitB} />
            <Stack.Screen name="ViewOutfitC" component={ViewOutfitC} /> 

          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
