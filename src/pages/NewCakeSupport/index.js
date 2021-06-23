import React, {useState} from 'react'
import { StyleSheet, StatusBar, useColorScheme, Alert } from 'react-native';
import Colors from '../../styles/Colors';

import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import InputText from '../../components/Core/InputText';



const NewCakeSupport = () => {

    const isDarkTheme = useColorScheme() === 'dark';
    const [qrCode, setQrCode] = useState();
    const [client, setClient] = useState();
    const [phone, setPhone] = useState();
    const [phoneMask, setPhoneMask] = useState();

    const onChangePhone = (maskedValue, rawValue) => {
        setPhone(rawValue);
        setPhoneMask(maskedValue);
    }

    return (
        <>
            <Container
                isDarkTheme={isDarkTheme}
                flex={0}
            >
                <StatusBar
                    barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                    backgroundColor={isDarkTheme ? Colors.dark : Colors.light}
                />
                <Title label='Cadastro de Suportes' isDarkTheme={isDarkTheme}/>

            </Container>
            <Container
                isDarkTheme={isDarkTheme}
                flex={1}
            >
                <ButtonApp isDarkTheme={isDarkTheme} label='Ler QR Code' />
                <InputText
                    label='QR Code'
                    isMasked={false}
                    value={qrCode}
                    isEditable={false}
                />
                <InputText
                    label='Cliente'
                    isMasked={false}
                    value={client}
                    onChangeText={setClient}
                    isEditable={true}
                />
                <InputText
                    label='Telefone'
                    isMasked={true}
                    value={phone}
                    onChangeText={onChangePhone}
                />
                <ButtonApp isDarkTheme={isDarkTheme} label='Realizar entrega' onPress={()=>Alert.alert(phone + phoneMask)} />
            </Container>
        </>
    )
}

export default NewCakeSupport;

const styles = StyleSheet.create({
    
})
