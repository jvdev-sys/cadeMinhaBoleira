import React from 'react'
import {Text, StyleSheet, View, useColorScheme} from 'react-native';
import Colors from '../../styles/Colors';

const Container = ({children, isDarkTheme, flex}) => {
    
    return (
        <View style={[isDarkTheme?styles.mainContainerDark:styles.mainContainerLight, 
               {flex: flex}
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


