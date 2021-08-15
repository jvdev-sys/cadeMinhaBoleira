import React, { useState } from 'react'
import {StatusBar, useColorScheme, Alert, View, Modal, Text } from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import useCakeSupport from '../../hooks/useCakeSupport';
import useEntry from '../../hooks/useEntry';
import styles from '../../styles/styles';
import Scanner from '../../components/Scanner';
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import InputText from '../../components/Core/InputText';
import ModalSuccess from '../../components/ModalSuccess';

const ReceiveCakeSupport = ({navigation}) => {

    let isDarkTheme = useColorScheme() === 'dark';
    const [cakeSupports, , , saveCakeSupport,] = useCakeSupport();
    const [entries, ,saveEntry] = useEntry();
    const [currentCakeSupport, setCurrentCakeSupport] = useState();
    const [isInDb, setIsInDb] = useState(null);
    const [qrCode, setQrCode] = useState();
    const [qrCodeMsg, setQrCodeMsg] = useState("");
    const [modalScanner, setModalScanner] = useState(false);
    const [modalSucessMsg, setModalSucessMsg] = useState(false);

    const onQrCodeDetected = (qrCode) => {
        if(validateQrCode(qrCode)){
            setQrCode(qrCode);
            setQrCodeMsg("");
        }
        onCloseScanner();
    }

    const onCloseScanner = () => {
        setModalScanner(false);
    }

    const onCloseSucessMsg = () => {
        setModalSucessMsg(false);
        navigation.goBack();
    }

    const validateQrCode = (qrCode) => {
        if (qrCode) {
            let queryCakeSupports = cakeSupports.filter(item => item.description === qrCode.data);
            if (queryCakeSupports.length > 0) {
                setCurrentCakeSupport(queryCakeSupports[0]);
                setIsInDb(true);
                return true;
            }
            else {
                setQrCodeMsg("*O suporte não está cadastrado no aplicativo.");
                setQrCode(null);
                setIsInDb(false);
                return false;
            }
        }
        else {
            return false;
        }
    }

    const onSubmit = () => {
        if(isInDb !== null){
            if (isInDb) {
                if(currentCakeSupport.isOut){
                    let matchedEntry = entries.filter(item => (item.cakeSupport.id === currentCakeSupport.id) && (item.closeAt === null));
                    
                    let today = new Date();
                    let timeElapsed = today - matchedEntry[0].entryAt;

                    let cakeSupportToSave = {
                        id: currentCakeSupport.id,
                        description: currentCakeSupport.description,
                        isOut: false,
                    };
                    
                    let entryToSave = {
                        id: matchedEntry[0].id,
                        entryAt: matchedEntry[0].entryAt,
                        closeAt: new Date(),
                        timeElapsed: timeElapsed,
                        cakeSupport: {
                            id: currentCakeSupport.id,
                            description: currentCakeSupport.description,
                            isOut: false,
                        },
                        client: matchedEntry[0].client,
                    };
                    saveCakeSupport(cakeSupportToSave);
                    saveEntry(entryToSave);
                    setModalSucessMsg(true);
                    console.log(JSON.stringify(entryToSave));
                    
                }
                else{
                    setQrCodeMsg("*O suporte não está em uso.");
                    setCurrentCakeSupport(null);
                    setQrCode(null);
                }
            }
            else {
                setQrCodeMsg("*O suporte não está cadastrado no aplicativo.");
            }
        }
        else{
            setQrCodeMsg("*É preciso escanear o código do suporte para realizar baixa no App.");
        }
        
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
                <Modal visible={modalScanner} animationType='fade' statusBarTranslucent={true}>
                    <Scanner
                        onQrCodeDetected={onQrCodeDetected}
                        onCloseScanner={onCloseScanner}
                        isDarkTheme={isDarkTheme}
                    />
                </Modal>
                <ModalSuccess 
                    isVisible={modalSucessMsg}
                    isDarkTheme={isDarkTheme}
                    onPress={onCloseSucessMsg}
                    msg="Suporte recebido com sucesso!"

                />
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
                {qrCodeMsg !== "" && <Text style={styles.smallLabelAlert}>{qrCodeMsg}</Text>}
                <ButtonApp
                    isDarkTheme={isDarkTheme}
                    label='Dar baixa'
                    onPress={() => onSubmit()}
                    disabled={!isInDb}
                />
            </Container>
    
        </>
    )
}


export default ReceiveCakeSupport;


