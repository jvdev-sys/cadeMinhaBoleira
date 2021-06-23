import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme} from 'react-native';
import Colors from '../../styles/Colors';



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
const styles = StyleSheet.create({
    smallLabelDark: {
        minWidth: "90%",
        minHeight: 40,
        textAlign:'center',
        color: Colors.white,
        fontSize: 18,
        fontWeight: '400',
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
    },
    smallLabelLight: {
        minWidth: "90%",
        minHeight: 40,
        textAlign: 'center',
        color: Colors.deepRose,
        fontSize: 18,
        fontWeight: '400',
        borderColor: Colors.deepRose,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
    },
})


export default ButtonApp;

