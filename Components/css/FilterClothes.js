import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text,
  } from "react-native";
  
  import { Dimensions } from "react-native";
  
  const windowWidth = Dimensions.get("window").width;
  
  const top = [ "Chemise", "Manteau", "Pull", "Robe", "T-shirt", "Top", "Veste"];
  const bottom = ["Chino","Jean", "Jupe","Pantacourt", "Pantalon", "Short"];
  const shoes = [ "Ballerines", "Basket", "Bottes", "Bottines", "Escarpins", "Mocassins", "Sandales" ];
  const accessories = ["Bijoux", "Bonnet","Chapeau","Casquette","Ceinture","Collant","Lunettes", "Montre", "Sac"];
  const colors = [
    { translate: "black", text: "Noir" , hexa: "#000000" },
    { translate: "brown", text: "Marron" , hexa: "#A52A2A" },
    { translate: "beige", text: "Beige" , hexa: "#D4BE8D" },
    { translate: "grey", text: "Gris" , hexa: "#808080" },
    { translate: "white", text: "Blanc" , hexa: "#FFFFFF" },
    { translate: "blue", text: "Bleu" , hexa: "#0000FF" },
    { translate: "green", text: "Vert" , hexa: "#008000" },
    { translate: "yellow", text: "Jaune" , hexa: "#FFFF00" },
    { translate: "orange", text: "Orange" , hexa: "#FFA500" },
    { translate: "red", text: "Rouge" , hexa: "#FF0000" },
    { translate: "pink", text: "Rose" , hexa: "#F563B9" },
    { translate: "purple", text: "Violet" , hexa: "#800080" },
    { translate: "gold", text: "Or" , hexa: "#FFD700" },
    { translate: "silver", text: "Argent" , hexa: "#C0C0C0" },
  ];
  const events = [
    { text: "Soirée", translate :"party" },
    { text: "Casual", translate : "casual"},
    { text: "Work", translate : "work"},
    { text: "Sport", translate : "sport"},
  ];
  const topMatiere = ["Coton", "Cuir", "Laine", "Lin", "Dentelle", "Soie", "Velours", "Autres"];
  const bottomMatiere = ["Coton", "Cuir", "Denim", "Lin", "Dentelle", "Soie", "Velours", "Autres"];
  const shoesMatiere = ["Caoutchouc","Plastique", "Cuir","Textile","Cork"];
  const clothesShapes = ["Ajusté", "Oversized", "Regular", "Skinny", "Slim"];
  const seasons = [
    { text: "Printemps", translate :"spring" },
    { text: "Été", translate : "summer"},
    { text: "Automne", translate : "autumn"},
    { text: "Hiver", translate : "winter"},
  ];
  const rain = [
    {waterproof : false, text : "Non"},
    {waterproof : true, text : "Oui"},
  ]
  
  function FilterSubtypeTop({ onSelectSubtype }) {

    const handleSubtypeSelect = (selectedSubtype) => {onSelectSubtype(selectedSubtype);}

      return (
        <View style={styles.filterContainer}>
          {top.map((top, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {handleSubtypeSelect(top)}}
              style={styles.filterButton}
            >
              <Text style={styles.filterText}>
                {top}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
  }

  function FilterSubtypeBottom({ onSelectSubtype }) {

    const handleSubtypeSelect = (selectedSubtype) => {onSelectSubtype(selectedSubtype);}

      return (
        <View style={styles.filterContainer}>
          {bottom.map((bottom, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {handleSubtypeSelect(bottom)}}
              style={styles.filterButton}
            >
              <Text style={styles.filterText}>
                {bottom}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
  }

  function FilterSubtypeShoes({ onSelectSubtype }) {

    const handleSubtypeSelect = (selectedSubtype) => {onSelectSubtype(selectedSubtype);}

      return (
        <View style={styles.filterContainer}>
          {shoes.map((shoes, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {handleSubtypeSelect(shoes)}}
              style={styles.filterButton}
            >
              <Text style={styles.filterText}>
                {shoes}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
  }

  function FilterSubtypeAccessories({ onSelectSubtype }) {

    const handleSubtypeSelect = (selectedSubtype) => {onSelectSubtype(selectedSubtype);}

      return (
        <View style={styles.filterContainer}>
          {accessories.map((accessories, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {handleSubtypeSelect(accessories)}}
              style={styles.filterButton}
            >
              <Text style={styles.filterText}>
                {accessories}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
  }

  function FilterEvent({onSelectEvent}) {

    const handleEventSelect = (selectedEvent) => {onSelectEvent(selectedEvent)}
  
    return (
      <View style={styles.filterContainer}>
      {events.map((event, index) => (
        <TouchableOpacity key={index} onPress={() => {handleEventSelect(event)}} style={styles.filterButton}>
          <Text style={styles.filterText}>{event.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
    );
  }
  
function FilterColor({onSelectColor}) {
    
  const handleColorSelect = (selectedColorText) => {onSelectColor(selectedColorText)}
  
  return (
      <View style={styles.colorsContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity key={index} onPress={() => {handleColorSelect(color)}}>
          <View
            name={color.name}
            style={[styles.colorRound, { backgroundColor: color.hexa }]}>
          </View>
          </TouchableOpacity> 
        ))}
        </View>
  );
}

function FilterMaterialTop({onSelectMaterial}) {
    
  const handleMaterialSelect = (selectedMaterial) => {onSelectMaterial(selectedMaterial)}

  return (
    <View style={styles.filterContainer}>
      {topMatiere.map((topMatiere, index) => (
        <TouchableOpacity key={index} onPress={() => {handleMaterialSelect(topMatiere)}} style={styles.filterButton}>
          <Text style={styles.filterText}>{topMatiere}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function FilterMaterialBottom({onSelectMaterial}) {
    
  const handleMaterialSelect = (selectedMaterial) => {onSelectMaterial(selectedMaterial)}

  return (
    <View style={styles.filterContainer}>
      {bottomMatiere.map((bottomMatiere, index) => (
        <TouchableOpacity key={index} onPress={() => {handleMaterialSelect(bottomMatiere)}} style={styles.filterButton}>
          <Text style={styles.filterText}>{bottomMatiere}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function FilterMaterialShoes({onSelectMaterial}) {
    
  const handleMaterialSelect = (selectedMaterial) => {onSelectMaterial(selectedMaterial)}

  return (
    <View style={styles.filterContainer}>
      {shoesMatiere.map((shoesMatiere, index) => (
        <TouchableOpacity key={index} onPress={() => {handleMaterialSelect(shoesMatiere)}} style={styles.filterButton}>
          <Text style={styles.filterText}>{shoesMatiere}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function FilterCut({onSelectCut}) {

  const handleCutSelect = (selectedCut) => {onSelectCut(selectedCut)}

  return (
    <View style={styles.filterContainer}>
    {clothesShapes.map((cut, index) => (
      <TouchableOpacity key={index} onPress={() => {handleCutSelect(cut)}} style={styles.filterButton}>
        <Text style={styles.filterText}>{cut}</Text>
      </TouchableOpacity>
    ))}
  </View>
  );
}

function FilterSeason({onSelectSeason}) {

  const handleSeasonSelect = (selectedSeason) => {onSelectSeason(selectedSeason)}

  return (
    <View style={styles.filterContainer}>
    {seasons.map((season, index) => (
      <TouchableOpacity key={index} onPress={() => {handleSeasonSelect(season)}} style={styles.filterButton}>
        <Text style={styles.filterText}>{season.text}</Text>
      </TouchableOpacity>
    ))}
  </View>
  );
}

function FilterRain({onSelectRain}) {

const handleRainSelect = (selectedRain) => {onSelectRain(selectedRain)}

return (
  <View style={styles.filterContainer}>
  {rain.map((rain, index) => (
    <TouchableOpacity key={index} onPress={() => {handleRainSelect(rain)}} style={styles.filterButton}>
      <Text style={styles.filterText}>{rain.text}</Text>
    </TouchableOpacity>
  ))}
  </View>
  );
}

export { FilterSubtypeTop, FilterSubtypeBottom, FilterSubtypeShoes, FilterSubtypeAccessories, FilterColor, FilterMaterialTop, FilterMaterialBottom, FilterMaterialShoes, FilterCut, FilterSeason, FilterRain, FilterEvent };
  
  const styles = StyleSheet.create({
    filtersContainer: {
      width: windowWidth * 0.9,
      alignContent: "center",
      paddingBottom : 20,
    },
    filterTitle: {
      fontSize: 18,
      fontFamily : "Lora-SemiBoldItalic",
      paddingBottom : 15,
      textAlign: "center",
    },
    filterContainer: {
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      rowGap: 5,
      columnGap: 7,
      paddingVertical: 5,
    },
    filterButton: {
      paddingHorizontal: 20,
      paddingVertical: 5,
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
    colorsContainer: {
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      width: "90%",
      rowGap: 10,
      columnGap: 10,
      paddingVertical: 5,
    },
    colorRound: {
      height: 35,
      width: 35,
      borderRadius: 50,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 5,
    },  
  });
  