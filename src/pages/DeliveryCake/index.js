import React, { useState } from 'react'
import { StyleSheet, StatusBar, useColorScheme, Alert, Modal, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Scanner from '../../components/Scanner';

import Colors from '../../styles/Colors';

import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import InputText from '../../components/Core/InputText';

const DeliveryCake = () => {
    const isDarkTheme = useColorScheme() === 'dark';
    const [sizeQrCode, setSizeQrCode] = useState(150);
    const [qrCode, setQrCode] = useState();
    const [client, setClient] = useState();
    const [phone, setPhone] = useState();
    const [phoneMask, setPhoneMask] = useState();
    const [modalScanner, setModalScanner] = useState(false);

    const onQrCodeDetected = (qrCode) => {
        setQrCode(qrCode);
        onCloseScanner();
    }

    const onCloseScanner = () => {
        setModalScanner(false);
    }

    const onFocus = () =>{
        setSizeQrCode(30);
    }

    const onBlur = () =>{
        setSizeQrCode(150);
    }

    const onChangePhone = (maskedValue, rawValue) => {
        setPhone(rawValue);
        setPhoneMask(maskedValue);
    }
    
    return (
    
        <>
            <Container
                isDarkTheme={isDarkTheme}
                flex={0}
                justifyContent='flex-start'
            >
                <StatusBar
                    barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                    backgroundColor={isDarkTheme ? Colors.dark : Colors.light}
                />
                <Title label='Cadastro de Suportes' isDarkTheme={isDarkTheme} />
                <Modal visible={modalScanner} animationType='fade'>
                    <Scanner onQrCodeDetected={onQrCodeDetected} onCloseScanner={onCloseScanner} />
                </Modal>
                
                {qrCode &&
                    <View style={styles.qrCode}>
                        <QRCode
                            size={sizeQrCode}
                            value={qrCode.data}
                        />
                    </View>
                }

            </Container>
            <Container
                isDarkTheme={isDarkTheme}
                flex={1}
                justifyContent='flex-start'
            >
                <ButtonApp isDarkTheme={isDarkTheme} label='Ler QR Code' onPress={() => setModalScanner(true)} />
                <InputText
                    isDarkTheme={isDarkTheme}
                    label='QR Code'
                    isMasked={false}
                    value={qrCode?qrCode.data:""}
                    isEditable={false}
                    
                />
                <InputText
                    isDarkTheme={isDarkTheme}
                    label='Cliente'
                    isMasked={false}
                    value={client}
                    onChangeText={setClient}
                    isEditable={true}
                    onFocus={() => onFocus()}
                    onBlur={() => onBlur()}
                />
                <InputText
                    isDarkTheme={isDarkTheme}
                    label='Telefone'
                    isMasked={true}
                    value={phone}
                    onChangeText={onChangePhone}
                    onFocus={() => onFocus()}
                    onBlur={() => onBlur()}
                />
                <ButtonApp isDarkTheme={isDarkTheme} label='Realizar entrega' onPress={() => Alert.alert(phone + phoneMask)} />
            </Container>
            <Container
                isDarkTheme={isDarkTheme}
                flex={0}
                justifyContent='flex-end'
            >
                <ButtonApp
                    isDarkTheme={isDarkTheme}
                    label='Voltar'
                    onPress={() => Alert.alert('Botão Voltar')}
                />
            </Container>
        </>
    )
}

export default DeliveryCake;

const styles = StyleSheet.create({})
