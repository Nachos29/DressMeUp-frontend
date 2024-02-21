import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setBrand } from "../../reducers/clothes";
import { SmallPlusCircle } from "./Pictos";

const windowWidth = Dimensions.get("window").width;

function FilterBrand() {
  const dispatch = useDispatch()
  const brandInput = useSelector((state) => state.clothes.temporaryClothe.brand)

  const [brands, setBrands] = useState("")

  const resetBrandInput = () => {
    setBrands('')
  }

  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>Quelle est la marque ?*</Text>
      <View style={styles.brandInputRow} >
        <TextInput onChangeText={(value) => setBrands(value)} value={brands}
          placeholder={brandInput ? brandInput : "Renseignez la marque"}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addBrandToStore} onPress={() => { dispatch(setBrand(brands)), resetBrandInput() }} >
          <SmallPlusCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { FilterBrand };

const styles = StyleSheet.create({
  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
  brandInputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems : "center",
    paddingVertical: 5,
    paddingHorizontal : 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },
  input: {
    width: windowWidth * 0.75,
  },
});
