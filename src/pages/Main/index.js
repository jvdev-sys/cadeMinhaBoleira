import React from 'react'
import { StyleSheet, View, Text, StatusBar, useColorScheme } from 'react-native';
import Colors from '../../styles/Colors';

import Container from '../../components/Core/Container';
import ButtonApp from '../../components/ButtonApp';

const Main = () => {
    
    const isDarkTheme = useColorScheme() === 'dark';
    
    return (
       <Container
        isDarkTheme={isDarkTheme}
       >
            <StatusBar 
                    barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                    backgroundColor={isDarkTheme ? Colors.dark : Colors.light}
            />
            <ButtonApp isDarkTheme={isDarkTheme} label='Cadastro de Boleira'/>
            <ButtonApp isDarkTheme={isDarkTheme} label='Registrar saída de bolo' />
            <ButtonApp isDarkTheme={isDarkTheme} label='Receber Boleira' />
       </Container>
    );
}

const styles = StyleSheet.create({
    

})

export default Main;


