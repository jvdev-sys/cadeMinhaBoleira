import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from '../../styles/styles';
import Colors from '../../styles/Colors';

const SecondaryTitle = ({label, isDarkTheme}) => {
    return (
        <View style={styles.secondaryTitleView}>
            <Text style={isDarkTheme ? styles.secondaryTitleLabelDark : styles.secondaryTitleLabelLight}>{label}</Text>
        </View>
    )
}
export default SecondaryTitle;


