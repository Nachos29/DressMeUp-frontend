// Correspond à 5A-A du Figma

// Topcontainer coder en dur, il faut prévoir un composant spécifique à importer plutôt
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {SmallPreviewAccessories, SmallPreviewBottom, SmallPreviewShoes, SmallPreviewTop } from '../../Components/css/CardPreviewClothes';
import { TopContainerListingClothes } from '../../Components/css/TopContainer';

function ViewClotheA({navigation}) {

  const handlePreview = (item) => {
    navigation.navigate('ViewClotheC', { selectedItem: item });
  };

  const handleAllTops = () => {
    navigation.navigate('ViewClotheB', { component: 'top' });
  };

  const handleAllBottom = () => {
    navigation.navigate('ViewClotheB', { component: 'bottom' });
  };

  const handleAllShoes = () => {
    navigation.navigate('ViewClotheB', { component: 'shoes' });
  };

  const handleAllAccessories = () => {
    navigation.navigate('ViewClotheB', { component: 'accessories' });
  };

  const handleGoBack = () => {
    navigation.navigate("HomeScreen")
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerListingClothes handleGoBack={handleGoBack}/>
      <SmallPreviewTop handlePreview={handlePreview} handleAllTops={handleAllTops}/>
      <SmallPreviewBottom handlePreview={handlePreview} handleAllBottom={handleAllBottom}/>
      <SmallPreviewShoes handlePreview={handlePreview} handleAllShoes={handleAllShoes}/>
      <SmallPreviewAccessories handlePreview={handlePreview} handleAllAccessories={handleAllAccessories}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FFF8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    rowGap: 5,
  },
  safearea: {
    flex: 1,
    backgroundColor: '#F6FFF8',
  },
  headerMainContainer: {
    width: "90%",

  },
  pictoHeader: {
    alignSelf: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerContainerPicto: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  topText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 30,
    color: "black",
    opacity: 0.7
  },
});

export default ViewClotheA;
