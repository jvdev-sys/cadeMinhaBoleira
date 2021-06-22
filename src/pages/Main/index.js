import React from 'react'
import { Text, View, StatusBar, useColorScheme } from 'react-native';
import Colors from '../../styles/Colors';

import Container from '../../components/Core/Container';
import ButtonApp from '../../components/ButtonApp';

const Main = () => {
    
    const isDarkTheme = useColorScheme() === 'dark';
    
    return (
       
        <Container isDarkTheme={isDarkTheme} >
            <StatusBar 
                barStyle={isDarkTheme? 'light-content': 'dark-content'} 
                backgroundColor={isDarkTheme? Colors.dark : Colors.light}
                />
            <ButtonApp label='Cadastro de Suportes' isDarkTheme={isDarkTheme}/>
        </Container>
       
    )
}

export default Main;


