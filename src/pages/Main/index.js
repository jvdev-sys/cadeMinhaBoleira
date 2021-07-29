import React, {useState, useCallback} from 'react'
import { StatusBar, Image, useColorScheme, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from '../../styles/styles';
import Logo from '../../assets/ivani_bolos.png'
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import SecondaryTitle from '../../components/Core/SecondaryTitle';

const Main = ({navigation}) => {
   
    let isDarkTheme = useColorScheme() === 'dark';

    useFocusEffect(
        useCallback(()=>{
            const setTheme = () =>{
                console.log(isDarkTheme);
            }
            setTheme();
        }, [isDarkTheme])
    );
    
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
                    backgroundColor={'transparent'}
                    translucent={true}
                />
                <ButtonApp isDarkTheme={isDarkTheme} label='Cadastro de Boleira' onPress={() => navigation.navigate('NewCakeSupport')}/>
                <ButtonApp isDarkTheme={isDarkTheme} label='Entregar Bolo' onPress={() => navigation.navigate('DeliveryCake')} />
                <ButtonApp isDarkTheme={isDarkTheme} label='Receber Boleira' onPress={() => navigation.navigate('ReceiveCakeSupport')} />
            </Container>
            <Container
                flex={1}
                isDarkTheme={isDarkTheme} 
            >
              <SecondaryTitle label='Bolos no mundão!' isDarkTheme={isDarkTheme}/>

            </Container>
        </>
       
    );
}



export default Main;


