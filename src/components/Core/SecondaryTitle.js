import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors';

const SecondaryTitle = ({label, isDarkTheme}) => {
    return (
        <View style={styles.secondaryTitleView}>
            <Text style={isDarkTheme ? styles.secondaryTitleLabelDark : styles.secondaryTitleLabelLight}>{label}</Text>
        </View>
    )
}

export default SecondaryTitle;

const styles = StyleSheet.create({
    secondaryTitleView:{
        marginTop: 10,
        marginBottom: 20,
    },
    secondaryTitleLabelDark:{
        color: Colors.white,
        fontSize: 20,
        fontWeight: '700',
    },
    secondaryTitleLabelLight: {
        color: Colors.deepRose,
        fontSize: 25,
        fontWeight: '700',
    },
})
