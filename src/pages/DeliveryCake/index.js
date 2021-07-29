import React, { useState } from 'react'
import { StyleSheet, StatusBar, Text, Modal, View, useColorScheme, KeyboardAvoidingView, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from '../../styles/styles';
import Scanner from '../../components/Scanner';
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import InputText from '../../components/Core/InputText';

const DeliveryCake = ({ navigation }) => {
    const isDarkTheme = useColorScheme() === 'dark';
    const [sizeQrCode, setSizeQrCode] = useState(150);
    const [qrCode, setQrCode] = useState();
    const [qrCodeMsg, setQrCodeMsg] = useState("");
    const [client, setClient] = useState();
    const [clientMsg, setClientMsg] = useState("");
    const [phone, setPhone] = useState();
    const [phoneMsg, setPhoneMsg] = useState("");
    const [phoneMask, setPhoneMask] = useState();
    const [modalScanner, setModalScanner] = useState(false);

    const onQrCodeDetected = (qrCode) => {
        setQrCode(qrCode);
        setQrCodeMsg("");
        onCloseScanner();
    }

    const onCloseScanner = () => {
        setModalScanner(false);
    }

    const onFocus = () => {
        setSizeQrCode(30);
    }

    const onBlur = () => {
        setSizeQrCode(150);
    }

    const onChangePhone = (maskedValue, rawValue) => {
        setPhone(rawValue);
        setPhoneMask(maskedValue);
        validatePhone(rawValue);

    }

    const validateQrCode = () => {
        if(qrCode){
            setQrCodeMsg("");
            return true;
        }
        else{
            setQrCodeMsg("É preciso escanear o código do suporte para realizar a entrega do bolo");
            return false;
        }
    }

    const validateNameClient = (text) =>{
        if (text){
            if (text.length < 2){
                
                setClientMsg("O nome do cliente precisa ter pelo menos 2 caracteres");
                return false;
            }
            else{
                setClientMsg("");
            }
        }
        else{
            setClientMsg("É preciso preencher o nome do cliente para realizar a entrega do bolo");
            return false;
        }
        return true;
    }

    const onChangedClient = (text) =>{
        setClient(text);
        validateNameClient(text);
    }

    const validatePhone = (rawValue) =>{
        if (rawValue){
            if (rawValue.length < 11){
                setPhoneMsg("O telefone do cliente precisa ser preenchido para realizar a entrega do bolo");
                return false;
            }
            setPhoneMsg("");
            return true;
        }
        else{
            setPhoneMsg("O telefone do cliente precisa ser preenchido para realizar a entrega do bolo");
            return false;
        }
    }

    const validateFields = () =>{
        let isQrCodeScanned = validateQrCode();
        let isClientValidField =  validateNameClient(client);
        let isPhoneValidField = validatePhone(phone);

        return isQrCodeScanned && isClientValidField && isPhoneValidField;
    }

    const onSubmit = () =>{
        if (validateFields()){
            Alert.alert('Campos válidos!');
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
                <Title label='Cadastro de Suportes' isDarkTheme={isDarkTheme} />
                <Modal visible={modalScanner} animationType='fade'>
                    <Scanner
                        onQrCodeDetected={onQrCodeDetected}
                        onCloseScanner={onCloseScanner}
                        isDarkTheme={isDarkTheme}
                    />
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
                <KeyboardAvoidingView>
                    <InputText
                        isDarkTheme={isDarkTheme}
                        label='QR Code'
                        isMasked={false}
                        value={qrCode ? qrCode.data : ""}
                        isEditable={false}

                    />
                    {qrCodeMsg !== "" && <Text style={styles.smallLabelAlert}>{qrCodeMsg}</Text>}
                    
                    <InputText
                        isDarkTheme={isDarkTheme}
                        label='Cliente'
                        isMasked={false}
                        value={client}
                        onChangeText={(text) => onChangedClient(text)}
                        isEditable={true}
                        onFocus={() => onFocus()}
                        onBlur={() => onBlur()}
                    />
                    {clientMsg !== "" && <Text style={styles.smallLabelAlert}>{clientMsg}</Text>}
                    <InputText
                        isDarkTheme={isDarkTheme}
                        label='Telefone'
                        isMasked={true}
                        value={phone}
                        onChangeText={onChangePhone}
                        onFocus={() => onFocus()}
                        onBlur={() => onBlur()}
                    />
                    {phoneMsg !== "" && <Text style={styles.smallLabelAlert}>{phoneMsg}</Text>}
                </KeyboardAvoidingView>
                <ButtonApp 
                    isDarkTheme={isDarkTheme} 
                    label='Realizar entrega' 
                    onPress={() => onSubmit()} />
           
                <ButtonApp
                    isDarkTheme={isDarkTheme}
                    label='Voltar'
                    onPress={() => navigation.goBack()}
                />
            </Container>
           
        </>
    )
}

export default DeliveryCake;

