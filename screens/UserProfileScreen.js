import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  login,
  logout,
  setPhoto,
  setUsername,
  setEmail,
} from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions } from "react-native";
import { Edit, PlusCircle } from "../Components/css/Pictos";
import { AccountTopContainer } from "../Components/css/TopContainer";
import CustomPopup from "../Components/functionalcomponents/CustomPopup";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, CameraType } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import {BACKEND_URL} from '@env'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function UserProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [isUsernameInputVisible, setIsUsernameInputVisible] = useState(false);
  const [isEmailInputVisible, setIsEmailInputVisible] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.front);
  const isFocused = useIsFocused();
  let cameraRef = useRef(null);

  // console.log("Valeur de profilPictURL :", state.value.profilictURL);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  //console.log(user.token, "user.token")

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync({ quality: 0.3 });
      const formData = new FormData();

      formData.append("photoFromFront", {
        uri: photo.uri,
        name: "photo.jpg",
        type: "image/jpeg",
      });

      console.log("Selfie:", photo.uri);

      fetch(
        `https://${BACKEND_URL}/users/upload/${user.token}/${user.idProfilPict}`,
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("DATA UPLOAD", data);

          if (data.result) {
            dispatch(
              setPhoto({
                profilPictURL: data.profilPictURL,
                idProfilPict: data.idProfilPict,
              })
            );
          }
        })
        .finally(setIsCameraVisible(false));
    }
  };

  if (!hasPermission || !isFocused) {
    return <View></View>;
  }

  const openCamera = () => {
    setIsCameraVisible(true);
    setPhoto;
  };

  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const handleDeleteAccount = () => {
    closePopup();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleNewEmailInput = () => {
    setIsEmailInputVisible(true);
  };

  const handleNewEmailSave = () => {
    setIsEmailInputVisible(false);
  };

  const handleConfirmEmailChange = () => {
    if (newEmail && newEmail.trim() !== "") {
      fetch(`https://${BACKEND_URL}/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          replacementEmail: newEmail,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          dispatch(setEmail(newEmail));
          setIsEmailInputVisible(false);
        });
    }
  };

  const handleNewUsernameInput = () => {
    setIsUsernameInputVisible(true);
  };

  const handleNewUsernameSave = () => {
    setIsUsernameInputVisible(false);
    setNewUsername(newUsername);
  };

  const handleConfirmUsernameChange = () => {
    handleNewUsernameSave();
    if (newUsername && newUsername.trim() !== "") {
      fetch(`https://${BACKEND_URL}/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          replacementUsername: newUsername,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(setUsername(newUsername));
          //console.log(data);
        });
    } else {
      console.log("Le nom d'utilisateur ne peut pas être vide.");
    }
  };

  const handleConnection = () => {
    navigation.navigate("LoginScreen");
  };

  if (isCameraVisible) {
    return (
      <Camera
        style={styles.takePict}
        type={cameraType}
        ref={(ref) => (cameraRef = ref)}
      >
        <TouchableOpacity onPress={() => cameraRef && takePicture()}>
          <PlusCircle />
        </TouchableOpacity>
      </Camera>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AccountTopContainer handleGoBack={handleGoBack} />
      
      <View>
        <View style={styles.circle}>
          {user.profilPictURL ? (
            <Image
              source={{ uri: user.profilPictURL }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: (windowWidth * 0.4) / 2,
              }}
            />
          ) : (
            <Image
              source={require("../assets/images/profile.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: (windowWidth * 0.4) / 2,
              }}
            />
          )}
          <TouchableOpacity style={styles.plusButton} onPress={openCamera}>
            <PlusCircle />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.inputTitle}>Mon pseudo</Text>
          {isUsernameInputVisible ? 
          ( <TextInput onChangeText={(value) => setNewUsername(value)} value={newUsername} autoFocus={true} onSubmitEditing={handleNewUsernameSave}/>) : 
          (<Text>{newUsername || user.username}</Text>)}

          <Text style={styles.inputTitle}>Mon email</Text>
          {isEmailInputVisible ? 
          (<TextInput onChangeText={(value) => setNewEmail(value)} value={newEmail} autoFocus={true} onSubmitEditing={handleNewEmailSave}/>) : 
          (<Text>{newEmail || user.email}</Text>)}
        </View>

      </View>

      <View>
        <TouchableOpacity
          style={styles.buttonGreen}
          activeOpacity={0.8}
          onPress={openPopup}
        >
          <Text style={styles.button}>Supprimer mon compte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} onPress={() => {handleConnection(), dispatch(logout());}}>
          <Text style={styles.button}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>

      <CustomPopup isVisible={showPopup} onClose={closePopup} onDelete={handleDeleteAccount}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F6FFF8",
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#F6FFF8",
    justifyContent: "space-between",
  },
  circle: {
    backgroundColor: "#D9D9D9",
    width: windowWidth * 0.4, // Utilisez des pourcentages pour définir la largeur du cercle
    height: windowWidth * 0.4, // Utilisez des pourcentages pour définir la hauteur du cercle
    borderRadius: (windowWidth * 0.4) / 2,
  },
  inputTitle: {
    fontFamily: "Lora-SemiBold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
    alignItems: "center",
    paddingBottom : 15,
  },
  picAndInfoUser: {
    flexDirection: "column",
    rowGap: 30,
    alignItems: "center",
    marginTop : -150,
  },
  plusButton: {
    alignSelf: "flex-end",
    top: "-20%",
  },
  edit: {
    left: "83%",
    top: -30,
  },
  info: {
      width: windowWidth * 0.9,
      padding: 10,
      borderWidth: 1.5,
      fontSize: 16,
      borderRadius: 10,
      borderColor: "#6B9080",
      backgroundColor: "#fff",
  },

  buttonGreen: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.9,
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
  },
  button: {
    fontFamily: "Lora-SemiBold",
  },
  inputContainer : {
  }
});
