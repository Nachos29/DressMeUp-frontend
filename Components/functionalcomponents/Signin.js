import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import { login } from "../../reducers/user";
import { BACKEND_URL } from '@env';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleSubmit = () => {
    if (showSignup) {
      fetch(`https://${BACKEND_URL}/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data.result) {
            setUsername("");
            setEmail("");
            setPassword("");
          }
          setShowSignup(!showSignup)
        });
    } else {
      fetch(`https://${BACKEND_URL}/users/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(
              login({
                token: data.token,
                username: data.username,
                email: data.email,
                idProfilPict: data.idProfilPict,
                profilPictURL: data.profilPictURL,
                password: data.password,
              })
            );
            navigation.navigate("HomeScreen");
            //retarder la reinitialisation des états
            setTimeout(() => {
              setUsername(""), { connectTimeoutMS: 3000 };
              setPassword(""), { connectTimeoutMS: 3000 };
            }, 1000);
          }
        });
    }
  };

  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <View style={styles.modalGrey}>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.title}>
            {showSignup ? "Inscription" : "Connexion"}
          </Text>
          <Text style={styles.textContent}>
            Pour créer le dressing de ses rêves!
          </Text>
        </View>
        <TextInput
          email
          placeholder="Identifiant"
          autoCapitalize="none"
          keyboardType="default" 
          textContentType="username" 
          autoComplete="username"
          onChangeText={(value) => setUsername(value)}
          value={username}
          style={styles.input}
        />
        {showSignup && (
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            onChangeText={(value) => setEmail(value)}
            value={email}
            style={styles.input}
          />
        )}
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry={isPasswordHidden}
          autoCapitalize="none"
          keyboardType="default"
          textContentType="password"
          onChangeText={(value) => setPassword(value)}
          value={password}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.buttonGreen}
          onPress={() => handleSubmit()}
          activeOpacity={0.8}
        >
          <Text style={styles.textLink}>
            {showSignup ? "S'inscrire" : "Se connecter"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.textBottom}>
          {showSignup ? "Déjà un compte?" : "Pas encore de compte?"}
        </Text>
        <TouchableOpacity
          onPress={() => handleToggleSignup()}
          activeOpacity={0.8}
        >
          <Text style={styles.textLink}>
            {showSignup ? "Connexion" : "Inscription"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  modalGrey: {
    height: windowHeight * 0.50,
    backgroundColor: "#EAF4F4",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    width: windowWidth,
  },

  inputContainer: {
    alignItems: "center",
    rowGap: 10,
  },
  input: {
    width: windowWidth * 0.9,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },
  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#6B9080",
    padding: 12,
    borderRadius: 10,
  },
  title: {
    fontFamily: "Lora-Bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
    padding: 15,
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "5%", // Réduire la marge inférieure
  },

  textBottom: {
    fontFamily: "Lora-Regular",
  },

  textLink: {
    fontFamily: "Lora-Bold",
  },

  textContent: {
    fontFamily: "Lora-Regular",
    paddingBottom: "5%",
    width: "100%",
  },
});
