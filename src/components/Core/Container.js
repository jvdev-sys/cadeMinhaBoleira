import React from 'react'
import {View} from 'react-native';
import styles from '../../styles/styles';

const Container = ({children, isDarkTheme, flex, justifyContent, marginTop = 0, borderRadius = 0}) => {
    
    return (
        <View style={[isDarkTheme?styles.mainContainerDark:styles.mainContainerLight, 
            { flex: flex, justifyContent: justifyContent, marginTop: marginTop, borderRadius: borderRadius}
            ]}>
            {children}
        </View>
    )
}

export default Container


