import React from 'react'
import { useTheme } from '@react-navigation/native'
import { StyleSheet, Text, View, StatusBar} from 'react-native'


const Teste = () => {

    const { colors, dark } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={dark ? "light-content":'dark-content'} translucent={true} backgroundColor='transparent'/>
            <Text style={{ color: colors.text }}>Teste</Text>
        </View>
    )
}

export default Teste;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})
