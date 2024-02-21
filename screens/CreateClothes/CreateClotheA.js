import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {TopContainerCreateClothe} from '../../Components/css/TopContainer';
import { CardAddClothes } from '../../Components/css/CardAddClothes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { resetTemporaryClothe, setMaintype } from '../../reducers/clothes';


function CreateClotheA({navigation}) {
    const dispatch = useDispatch();


    const handleGoBack = () => {
        navigation.navigate('HomeScreen');
    }

    const handleTopSubmit = () => {
        dispatch(resetTemporaryClothe())
        dispatch(setMaintype('top'))
        navigation.navigate('CreateClotheB');
    };

    const handleBottomSubmit = () => {
        dispatch(resetTemporaryClothe())
        dispatch(setMaintype('bottom'))
        navigation.navigate('CreateClotheB');
    };

    const handleShoesSubmit = () => {
        dispatch(resetTemporaryClothe())
        dispatch(setMaintype('shoes'))
        navigation.navigate('CreateClotheB');
    };

    const handleAccessoriesSubmit = () => {
        dispatch(resetTemporaryClothe())
        dispatch(setMaintype('accessories'))
        navigation.navigate('CreateClotheB');
    };


    return (
        <SafeAreaView style={styles.mainContainer}>
                <TopContainerCreateClothe handleGoBack={handleGoBack} />
                <CardAddClothes handleTopSubmit={handleTopSubmit} handleBottomSubmit={handleBottomSubmit} handleShoesSubmit={handleShoesSubmit} handleAccessoriesSubmit={handleAccessoriesSubmit} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F6FFF8',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})

export default CreateClotheA
