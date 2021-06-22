import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme} from 'react-native';
import Colors from '../styles/Colors';



const ButtonApp = ({label, isDarkTheme}) => {

    
    
    return (
        <View>
            <TouchableOpacity>
                <View>
                    <Text style={isDarkTheme ? styles.smallLabelDark : styles.smallLabelLight}>{label}</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    smallLabelDark: {
        
        color: Colors.white,
        fontSize: 18,
        fontWeight: '400',
    },
    smallLabelLight: {
        color: Colors.deepRose,
        fontSize: 18,
        fontWeight: '400',
    },
})


export default ButtonApp;

