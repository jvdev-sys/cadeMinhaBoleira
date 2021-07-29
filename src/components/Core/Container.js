import React from 'react'
import {View} from 'react-native';
import styles from '../../styles/styles';

const Container = ({children, isDarkTheme, flex, justifyContent}) => {
    
    return (
        <View style={[isDarkTheme?styles.mainContainerDark:styles.mainContainerLight, 
            { flex: flex, justifyContent: justifyContent }
            ]}>
            {children}
        </View>
    )
}

export default Container


