import React from 'react'
import {StatusBar, StyleSheet, useColorScheme, Image } from 'react-native';
import Colors from '../../styles/Colors';
import Logo from '../../assets/ivani_bolos.png'
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import SecondaryTitle from '../../components/Core/SecondaryTitle';

const Main = () => {
    
    const isDarkTheme = useColorScheme() === 'dark';
    
    return (
        <>
            <Container
                isDarkTheme={isDarkTheme}
                flex={0}
                style={styles.topContainer}
            >
                <Title label='Cadê Minha Boleira?' isDarkTheme={isDarkTheme}></Title>
                <Image 
                    style={styles.logo}
                    source={Logo}
                />
            </Container>

            <Container
                flex={0}
                isDarkTheme={isDarkTheme}
                style={styles.buttonContainer}
            >
                <StatusBar
                    barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                    backgroundColor={isDarkTheme ? Colors.dark : Colors.light}
                />
                <ButtonApp isDarkTheme={isDarkTheme} label='Cadastro de Boleira' />
                <ButtonApp isDarkTheme={isDarkTheme} label='Entregar Bolo' />
                <ButtonApp isDarkTheme={isDarkTheme} label='Receber Boleira' />
            </Container>
            <Container
                flex={1}
                isDarkTheme={isDarkTheme} 
            >
              <SecondaryTitle label='Bolos no Mundão!' isDarkTheme={isDarkTheme}/>

            </Container>
        </>
       
    );
}

const styles = StyleSheet.create({
   logo: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        marginBottom: 30,
   },
})

export default Main;


