import React from 'react'
import {Text, StyleSheet, View, useColorScheme} from 'react-native';
import Colors from '../../styles/Colors';

const Container = ({children, isDarkTheme, flex, justifyContent}) => {
    
    return (
        <View style={[isDarkTheme?styles.mainContainerDark:styles.mainContainerLight, 
            { flex: flex, justifyContent: justifyContent }
            ]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainerDark: {
      
        backgroundColor: Colors.dark,
        alignItems: 'center',  
    },
    mainContainerLight: {
       
        backgroundColor: Colors.light,
        alignItems: 'center',
    },
    flex0:{
        flex: 0,
    },
    flex1: {
        flex: 1,
    },
})

export default Container


