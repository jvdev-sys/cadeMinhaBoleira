import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme} from 'react-native';
import Colors from '../../styles/Colors';

import styles from '../../styles/styles';

const ButtonApp = ({ 
    label, 
    isDarkTheme, 
    onPress=()=>{}, 
    disabled = false,
    minWidth = "90%"
}) => {

    return (
        <View>
            <TouchableOpacity onPress={onPress} disabled={disabled}>
                <View>
                    <Text style={[isDarkTheme ? styles.smallLabelDark : styles.smallLabelLight, {minWidth: minWidth}]}>{label}</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}


export default ButtonApp;

