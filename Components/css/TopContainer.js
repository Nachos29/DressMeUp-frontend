import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { LeftArrowCircle, Undo, Trash, List } from "./Pictos";

const windowWidth = Dimensions.get("window").width;

function TopContainerCreateClothe({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Ajouter...</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingTop({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes hauts</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingBottom({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes bas</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingShoes({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes chaussures</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingAccessories({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes accessoires</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingClothes({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes vêtements</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingOutfits({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes tenues</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerOutfit({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Ma tenue</Text>
        </View>
      </View>
    </View>
  );
}

function AccountTopContainer({handleGoBack}) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mon compte</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerPicto({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainerPicto}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TopContainerPictoSubtext({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View>
        <View style={styles.headerContainerPicto}>
          <View style={styles.pictoHeader}>
            <TouchableOpacity onPress={handleGoBack}>
              <LeftArrowCircle />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.textTitle}>Dites nous en plus sur votre vêtement</Text>
        <Text style={styles.textSubtitle}>
          Choisissez parmi les options ci-dessous
        </Text>
      </View>
    </View>
  );
}

function TopContainerPictoSubtextAccessories({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View>
        <View style={styles.headerContainerPicto}>
          <View style={styles.pictoHeader}>
            <TouchableOpacity onPress={handleGoBack}>
              <LeftArrowCircle />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.textTitle}>Dites nous en plus sur votre accessoire</Text>
        <Text style={styles.textSubtitle}>
          Choisissez parmi les options ci-dessous
        </Text>
      </View>
    </View>
  );
}

function TopContainerOverviewOutfit({ handleGoBack, handleUndo }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.doublePictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUndo}>
            <Undo />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Ma tenue</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerDeleteOutfit({
  handleGoBack,
  handleModalView,
  handleList,
}) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.doublePictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModalView}>
            <Trash />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleList}>
            <List />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Ma tenue</Text>
        </View>
      </View>
    </View>
  );
}

export {
  TopContainerCreateClothe,
  TopContainerPicto,
  TopContainerOverviewOutfit,
  TopContainerListingAccessories,
  TopContainerListingBottom,
  TopContainerListingTop,
  TopContainerListingShoes,
  TopContainerListingClothes,
  TopContainerListingOutfits,
  TopContainerOutfit,
  TopContainerDeleteOutfit,
  TopContainerPictoSubtext,
  TopContainerPictoSubtextAccessories,
  AccountTopContainer
};

const styles = StyleSheet.create({
  headerMainContainer: {
    width: "90%",
  },
  headerMainContainerSubtext: {
    width: "90%",
    alignItems: "center",
  },
  emptyCard: {
    height: 24,
    width: 24,
  },
  pictoHeader: {
    alignSelf: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerDoubleContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainerPicto: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerOverviewContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerOverviewMainContainer: {
    width: "90%",
  },
  topText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 30,
    color: "black",
    opacity: 0.7,
  },
  doublePictoHeader: {
    flexDirection: "row",
    columnGap: 20,
    alignSelf: "center",
  },
  subtitle: {
    justifyContent: "center",
    alignContent: "center",
  },
  subTextContainer : {
    paddingTop : 20,
    alignContent : "center",
    alignItems : "center"
  },
  textTitle: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 20,
    marginBottom: 10,
  },
  textSubtitle: {
    width: windowWidth * 0.7,
    textAlign: "center",
    fontFamily : "Lora-Regular",
  },
});
