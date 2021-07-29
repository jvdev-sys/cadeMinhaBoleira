import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme} from 'react-native';
import Colors from '../../styles/Colors';

import styles from '../../styles/styles';

const ButtonApp = ({label, isDarkTheme, onPress=()=>{}}) => {

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View>
                    <Text style={isDarkTheme ? styles.smallLabelDark : styles.smallLabelLight}>{label}</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}


export default ButtonApp;

