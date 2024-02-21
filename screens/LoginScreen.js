import SignIn from "../Components/functionalcomponents/Signin";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen({navigation}) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingContainer}>

    <SafeAreaView style={styles.mainContainer}>
    <ScrollView style={styles.scrollView}>

      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Logo.png")}
          resizeMode="contain"
        />
      </View>
      <SignIn navigation={navigation}/>
      </ScrollView>

    </SafeAreaView>
     </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#6B9080",
    alignItems: "center",
    justifyContent: "space-between",
  },
  keyboardAvoidingContainer: {
    flex: 1, // Ensure the KeyboardAvoidingView takes up the entire available space
  },
  scrollView: {
    flex: 1, // Le ScrollView doit s'étendre pour permettre le défilement
  },
  imgContainer: {
    paddingBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
  },
});
