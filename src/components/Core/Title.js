import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styles from '../../styles/styles';
import Colors from '../../styles/Colors';

const Title = ({label, isDarkTheme}) => {
    return (
        <View style={styles.titleView}>
            <Text style={isDarkTheme ? styles.titleLabelDark : styles.titleLabelLight}>{label}</Text>
        </View>
    )
}

export default Title;

