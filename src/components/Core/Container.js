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
        
        backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainerLight: {
       
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Container


