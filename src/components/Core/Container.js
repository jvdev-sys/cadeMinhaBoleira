import React from 'react'
import {Text, StyleSheet, View, useColorScheme} from 'react-native';
import Colors from '../../styles/Colors';

const Container = ({children, isDarkTheme}) => {
    

    
    return (
        <View style={isDarkTheme?styles.mainContainerDark:styles.mainContainerLight}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainerDark: {
       flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainerLight: {
       flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Container


