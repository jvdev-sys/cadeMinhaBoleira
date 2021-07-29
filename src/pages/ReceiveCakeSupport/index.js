import React, { useState } from 'react'
import {StatusBar, useColorScheme, Alert, View, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from '../../styles/styles';
import Scanner from '../../components/Scanner';
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import InputText from '../../components/Core/InputText';


const ReceiveCakeSupport = ({navigation}) => {

    let isDarkTheme = useColorScheme() === 'dark';
    const [qrCode, setQrCode] = useState();
    const [modalScanner, setModalScanner] = useState(false);

    const onQrCodeDetected = (qrCode) => {
        setQrCode(qrCode);
        onCloseScanner();
    }

    const onCloseScanner = () => {
        setModalScanner(false);
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
                    backgroundColor={'transparent'}
                    translucent={true}
                />
                <Modal visible={modalScanner} animationType='fade'>
                    <Scanner
                        onQrCodeDetected={onQrCodeDetected}
                        onCloseScanner={onCloseScanner}
                        isDarkTheme={isDarkTheme}
                    />
                </Modal>
                <Title label='Receber Suporte' isDarkTheme={isDarkTheme} />
                {qrCode &&
                    <View style={styles.qrCode}>
                        <QRCode
                            size={150}
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
                    value={qrCode ? qrCode.data : ""}
                    isEditable={false}
                />

                <ButtonApp
                    isDarkTheme={isDarkTheme}
                    label='Dar baixa'
                    onPress={() => Alert.alert('Cadastro QR Code')}
                />


            </Container>
            <Container
                isDarkTheme={isDarkTheme}
                flex={0}
                justifyContent='flex-end'
            >
                <ButtonApp
                    isDarkTheme={isDarkTheme}
                    label='Voltar'
                    onPress={() => navigation.goBack()}
                />
            </Container>
        </>
    )
}


export default ReceiveCakeSupport;


