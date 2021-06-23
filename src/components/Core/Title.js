import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors';

const Title = ({label, isDarkTheme}) => {
    return (
        <View style={styles.titleView}>
            <Text style={isDarkTheme ? styles.titleLabelDark : styles.titleLabelLight}>{label}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    titleView:{
        marginTop: 20,
        marginBottom: 20,
    },
    titleLabelDark:{
        color: Colors.white,
        fontSize: 25,
        fontWeight: '700',
    },
    titleLabelLight: {
        color: Colors.deepRose,
        fontSize: 25,
        fontWeight: '700',
    },
})
