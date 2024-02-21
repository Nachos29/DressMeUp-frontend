import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import {
  AutumnSmall,
  EventCasualSmall,
  EventPartySmall,
  EventSportSmall,
  EventWorkSmall,
  RainSmall,
  SpringSmall,
  SummerSmall,
  WinterSmall,
} from "./Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function PreviewListingTop({ handleTopOutfitSubmit, tops }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const topClothes = clothes.filter((clothe) => clothe.maintype === "top");

  const filteredTopClothes = tops
    ? topClothes.filter((clothe) => clothe.key === tops)
    : topClothes;

  return (
    <>
      {filteredTopClothes.map((clothe, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTopOutfitSubmit(clothe)}
        >
          <View style={styles.cardClothesTop}>
            <Image source={{ uri: clothe.image }} style={styles.image} />
            <View style={styles.pictoContainer}>
              {clothe.season.spring && <SpringSmall />}
              {clothe.season.summer && <SummerSmall />}
              {clothe.season.fall && <AutumnSmall />}
              {clothe.season.winter && <WinterSmall />}
              {clothe.event.casual && <EventCasualSmall />}
              {clothe.event.party && <EventPartySmall />}
              {clothe.event.work && <EventWorkSmall />}
              {clothe.event.sport && <EventSportSmall />}
              {clothe.waterproof && <RainSmall />}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function PreviewOverview({ clothe }) {
  let cardStyle;

  switch (clothe.maintype) {
    case "top":
      cardStyle = styles.cardClothesTop;
      break;
    case "bottom":
      cardStyle = styles.cardClothesBottom;
      break;
    case "shoes":
      cardStyle = styles.cardClothesShoes;
      break;
    case "accessories":
      cardStyle = styles.cardClothesAccessories;
      break;
  }

  return (
    <View style={cardStyle}>
      <Image source={{ uri: clothe.image }} style={styles.image} />
    </View>
  );
}

function PreviewListingBottom({ handleBottomOutfitSubmit }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const bottomClothes = clothes.filter(
    (clothe) => clothe.maintype === "bottom"
  );

  return (
    <>
      {bottomClothes.map((clothe, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleBottomOutfitSubmit(clothe)}
        >
          <View style={styles.cardClothesBottom}>
            <Image source={{ uri: clothe.image }} style={styles.image} />
            <View style={styles.pictoContainer}>
              {clothe.season.spring && <SpringSmall />}
              {clothe.season.summer && <SummerSmall />}
              {clothe.season.fall && <AutumnSmall />}
              {clothe.season.winter && <WinterSmall />}
              {clothe.event.casual && <EventCasualSmall />}
              {clothe.event.party && <EventPartySmall />}
              {clothe.event.work && <EventWorkSmall />}
              {clothe.event.sport && <EventSportSmall />}
              {clothe.waterproof && <RainSmall />}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function PreviewListingShoes({ handleShoesOutfitSubmit }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const shoesClothes = clothes.filter((clothe) => clothe.maintype === "shoes");

  return (
    <>
      {shoesClothes.map((clothe, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleShoesOutfitSubmit(clothe)}
        >
          <View style={styles.cardClothesShoes}>
            <Image source={{ uri: clothe.image }} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function PreviewListingAccessories({ handleAccessoryOutfitSubmit }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const accessoriesClothes = clothes.filter(
    (clothe) => clothe.maintype === "accessories"
  );

  return (
    <>
      {accessoriesClothes.map((clothe, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAccessoryOutfitSubmit(clothe)}
        >
          <View style={styles.cardClothesAccessories}>
            <Image source={{ uri: clothe.image }} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function PreviewTop() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardClothes}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardClothes}></View>
      </TouchableOpacity>
    </View>
  );
}

function PreviewBottom() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardClothes}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardClothes}></View>
      </TouchableOpacity>
    </View>
  );
}

function PreviewShoes() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardClothes}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardClothes}></View>
      </TouchableOpacity>
    </View>
  );
}

function PreviewAccessories() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardAccessories}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardAccessories}></View>
      </TouchableOpacity>
    </View>
  );
}

function PreviewTopList({ handlePreview }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const topClothes = clothes.filter((clothe) => clothe.maintype === "top");

  return (
    <>
      {topClothes.map(
        (clothe, index) => (
          console.log(clothe),
          (
            <TouchableOpacity key={index} onPress={() => handlePreview(clothe)}>
              <View style={styles.cardClothesTop}>
                <Image source={{ uri: clothe.image }} style={styles.image} />
                <View style={styles.pictoContainer}>
                  {clothe.season.spring && <SpringSmall />}
                  {clothe.season.summer && <SummerSmall />}
                  {clothe.season.fall && <AutumnSmall />}
                  {clothe.season.winter && <WinterSmall />}
                  {clothe.event.casual && <EventCasualSmall />}
                  {clothe.event.party && <EventPartySmall />}
                  {clothe.event.work && <EventWorkSmall />}
                  {clothe.event.sport && <EventSportSmall />}
                  {clothe.waterproof && <RainSmall />}
                </View>
              </View>
            </TouchableOpacity>
          )
        )
      )}
    </>
  );
}

function PreviewBottomList({ handlePreview }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const bottomClothes = clothes.filter(
    (clothe) => clothe.maintype === "bottom"
  );

  return (
    <>
      {bottomClothes.map((clothe, index) => (
        <TouchableOpacity key={index} onPress={() => handlePreview(clothe)}>
          <View style={styles.cardClothesBottom}>
            <Image source={{ uri: clothe.image }} style={styles.image} />
            <View style={styles.pictoContainer}>
              {clothe.event.casual && <EventCasualSmall />}
              {clothe.event.party && <EventPartySmall />}
              {clothe.event.work && <EventWorkSmall />}
              {clothe.event.sport && <EventSportSmall />}
              {clothe.season.spring && <SpringSmall />}
              {clothe.season.summer && <SummerSmall />}
              {clothe.season.fall && <AutumnSmall />}
              {clothe.season.winter && <WinterSmall />}
              {clothe.waterproof && <RainSmall />}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function PreviewShoesList({ handlePreview }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const shoesClothes = clothes.filter((clothe) => clothe.maintype === "shoes");

  return (
    <>
      {shoesClothes.map((clothe, index) => (
        <TouchableOpacity key={index} onPress={() => handlePreview(clothe)}>
          <View style={styles.cardClothesShoes}>
            <Image source={{ uri: clothe.image }} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function PreviewAccessoriesList({ handlePreview }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const accessoriesClothes = clothes.filter(
    (clothe) => clothe.maintype === "accessories"
  );

  return (
    <>
      {accessoriesClothes.map((clothe, index) => (
        <TouchableOpacity key={index} onPress={() => handlePreview(clothe)}>
          <View style={styles.cardClothesAccessories}>
            <Image source={{ uri: clothe.image }} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function SmallPreviewTop({ handlePreview, handleAllTops }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const topClothes = clothes.filter((clothe) => clothe.maintype === "top");

  return (
    <View style={styles.smallPreviewContainer}>
      <View style={styles.smallPreviewTopContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllTops}>
          <Text style={styles.containerTitle}>Mes hauts</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllTops}>
          <Text style={styles.filterButton}>Tous mes hauts</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.smallCardContainer}
      >
        {topClothes.map((clothe, index) => (
          <TouchableOpacity key={index} onPress={() => handlePreview(clothe)}>
            <View style={styles.smallCardClothes}>
              <Image source={{ uri: clothe.image }} style={styles.image} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function SmallPreviewBottom({ handlePreview, handleAllBottom }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const bottomClothes = clothes.filter(
    (clothe) => clothe.maintype === "bottom"
  );

  return (
    <View style={styles.smallPreviewContainer}>
      <View style={styles.smallPreviewTopContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllBottom}>
          <Text style={styles.containerTitle}>Mes bas</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllBottom}>
          <Text style={styles.filterButton}>Tous mes bas</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.smallCardContainer}
      >
        {bottomClothes.map((clothe, index) => (
          <TouchableOpacity key={index} onPress={() => handlePreview(clothe)}>
            <View style={styles.smallCardClothes}>
              <Image source={{ uri: clothe.image }} style={styles.image} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
function SmallPreviewShoes({ handlePreview, handleAllShoes }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const shoesClothes = clothes.filter((clothe) => clothe.maintype === "shoes");

  return (
    <View style={styles.smallPreviewContainer}>
      <View style={styles.smallPreviewTopContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllShoes}>
          <Text style={styles.containerTitle}>Mes chaussures</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllShoes}>
          <Text style={styles.filterButton}>Toutes mes chaussures</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.smallCardContainer}
      >
        {shoesClothes.map((clothe, index) => (
          <TouchableOpacity key={index} onPress={() => handlePreview(clothe)}>
            <View style={styles.smallCardAccessories}>
              <Image source={{ uri: clothe.image }} style={styles.imageSmall} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function SmallPreviewAccessories({ handlePreview, handleAllAccessories }) {
  const clothes = useSelector((state) => state.clothes.clothes);
  const accessoriesClothes = clothes.filter(
    (clothe) => clothe.maintype === "accessories"
  );

  return (
    <View style={styles.smallPreviewContainer}>
      <View style={styles.smallPreviewTopContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllAccessories}>
          <Text style={styles.containerTitle}>Mes accessoires</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllAccessories}>
          <Text style={styles.filterButton}>Tous mes accessoires</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.smallCardContainer}
      >
        {accessoriesClothes.map((clothe, index) => (
          <TouchableOpacity key={index} onPress={() => handlePreview(clothe)}>
            <View style={styles.smallCardAccessories}>
              <Image source={{ uri: clothe.image }} style={styles.imageSmall} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function PreviewListingFiltered({
  subtype,
  color,
  material,
  cut,
  season,
  rain,
  maintype,
  event,
  handleTopOutfitSubmit,
  handleBottomOutfitSubmit,
  handleAccessoryOutfitSubmit,
  handleShoesOutfitSubmit,
}) {
  const clothes = useSelector((state) => state.clothes.clothes);

  const filteredClothes = clothes.filter(
    (clothe) =>
      clothe.maintype === maintype &&
      (subtype ? clothe.subtype === subtype : true) &&
      (color ? clothe.color.name === color.translate : true) &&
      (material ? clothe.material === material : true) &&
      (cut ? clothe.cut === cut : true) &&
      (season ? clothe.season[season.translate] : true) &&
      (event ? clothe.event[event.translate] : true) &&
      (rain ? clothe.waterproof === rain.waterproof : true)
  );

  return (
    <>
      {filteredClothes.length > 0 ? (
        filteredClothes.map((clothe, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (maintype === "top") {
                handleTopOutfitSubmit(clothe);
              } else if (maintype === "bottom") {
                handleBottomOutfitSubmit(clothe);
              } else if (maintype === "shoes") {
                handleShoesOutfitSubmit(clothe);
              } else if (maintype === "accessories") {
                handleAccessoryOutfitSubmit(clothe);
              }
            }}
          >
            <View style={styles.cardClothesTop}>
              <Image source={{ uri: clothe.image }} style={styles.image} />
              <View style={styles.pictoContainer}>
                  {clothe.season.spring && <SpringSmall />}
                  {clothe.season.summer && <SummerSmall />}
                  {clothe.season.fall && <AutumnSmall />}
                  {clothe.season.winter && <WinterSmall />}
                  {clothe.event.casual && <EventCasualSmall />}
                  {clothe.event.party && <EventPartySmall />}
                  {clothe.event.work && <EventWorkSmall />}
                  {clothe.event.sport && <EventSportSmall />}
                  {clothe.waterproof && <RainSmall />}
                </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noElementText}>
          Aucun élément ne correspond à votre recherche
        </Text>
      )}
    </>
  );
}

function PreviewFilteredList({
  subtype,
  color,
  material,
  cut,
  season,
  rain,
  maintype,
  event,
  handlePreview
}) {
  const clothes = useSelector((state) => state.clothes.clothes);

  const filteredClothes = clothes.filter(
    (clothe) =>
      clothe.maintype === maintype &&
      (subtype ? clothe.subtype === subtype : true) &&
      (color ? clothe.color.name === color.translate : true) &&
      (material ? clothe.material === material : true) &&
      (cut ? clothe.cut === cut : true) &&
      (season ? clothe.season[season.translate] : true) &&
      (event ? clothe.event[event.translate] : true) &&
      (rain ? clothe.waterproof === rain.waterproof : true)
  );

  return (
    <>
      {filteredClothes.length > 0 ? (
        filteredClothes.map((clothe, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePreview(clothe)}
          >
            <View style={styles.cardClothesTop}>
              <Image source={{ uri: clothe.image }} style={styles.image} />
              <View style={styles.pictoContainer}>
                  {clothe.season.spring && <SpringSmall />}
                  {clothe.season.summer && <SummerSmall />}
                  {clothe.season.fall && <AutumnSmall />}
                  {clothe.season.winter && <WinterSmall />}
                  {clothe.event.casual && <EventCasualSmall />}
                  {clothe.event.party && <EventPartySmall />}
                  {clothe.event.work && <EventWorkSmall />}
                  {clothe.event.sport && <EventSportSmall />}
                  {clothe.waterproof && <RainSmall />}
                </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noElementText}>
          Aucun élément ne correspond à votre recherche
        </Text>
      )}
    </>
  );
}


export {
  PreviewListingTop,
  PreviewListingBottom,
  PreviewListingShoes,
  PreviewListingAccessories,
  PreviewOverview,
  PreviewTop,
  PreviewBottom,
  PreviewShoes,
  PreviewAccessories,
  SmallPreviewTop,
  SmallPreviewBottom,
  SmallPreviewShoes,
  SmallPreviewAccessories,
  PreviewTopList,
  PreviewBottomList,
  PreviewShoesList,
  PreviewAccessoriesList,
  PreviewListingFiltered,
  PreviewFilteredList,
};

const styles = StyleSheet.create({
  previewContainer: {
    width: "90%",
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 10,
    columnGap: 10,
    paddingTop: 10,
  },
  smallPreviewContainer: {
    width: "90%",
    rowGap: 10,
    columnGap: 10,
    paddingTop: 10,
  },
  smallCardContainer: {
    flexDirection: "row",
    rowGap: 10,
    columnGap: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardClothesTop: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.237,
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
  cardClothesBottom: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.237,
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
  cardClothesAccessories: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.118,
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
  cardClothesShoes: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.118,
    borderRadius: 10,
    backgroundColor: "green",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
  cardAccessories: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.118,
    borderRadius: 10,
    backgroundColor: "#222",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
  smallCardClothes: {
    width: windowWidth * 0.256,
    height: windowHeight * 0.142,
    borderRadius: 10,
  },
  smallPreviewTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallCardAccessories: {
    width: windowWidth * 0.256,
    height: windowHeight * 0.118,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    borderRadius: 10,
  },
  imageSmall: {
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  containerTitle: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
  },
  noElementText: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
    width: "80%",
    textAlign: "center",
    opacity: 0.5,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#6B9080",
    borderWidth: 1,
    borderRadius: 10,
    color: "#6B9080",
    fontFamily: "Lora-Bold",
    fontSize: 10,
  },
  pictoContainer: {
    width: "100%",
    height: 30,
    backgroundColor: "rgba(107, 144, 128, 0.8)",
    marginTop: -30,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    justifyContent: "flex-end",
    paddingHorizontal: 5,
  },
});
