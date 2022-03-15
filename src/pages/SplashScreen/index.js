import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, Dimensions } from 'react-native'

import Colors from '../../styles/Colors'

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const SplashScreen = ({navigation}) => {

    setTimeout(() => {
        navigation.replace('Main');
    }, 1500);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'transparent'}
                translucent={true}
            />
            <Image 
                style={styles.stretch}
                source={require('../../assets/logoTexto.png')} 
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.light,
    },
    stretch: {
        width: WIDTH,
        height: HEIGHT/2,
        resizeMode: 'stretch',
    },

})
