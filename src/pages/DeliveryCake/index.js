import React, { useState, useEffect } from 'react'
import { 
    StyleSheet, 
    StatusBar, 
    Text, 
    Modal, 
    View, 
    useColorScheme,
    FlatList,
} from 'react-native';


import QRCode from 'react-native-qrcode-svg';
import styles from '../../styles/styles';
import Scanner from '../../components/Scanner';
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import InputText from '../../components/Core/InputText';
import useCakeSupport from '../../hooks/useCakeSupport';
import useClient from '../../hooks/useClient';
import useEntry from '../../hooks/useEntry';
import ClientPicker from '../../components/ClientPicker';
import ModalSuccess from '../../components/ModalSuccess';
import ModalClientEntry from '../../components/Core/ModalClientEntry';

const clientsFake = [
    { name: 'Fulano', id: 1 },
    { name: 'Cicrano', id: 2 },
    { name: 'Beltrano', id: 3 },
    { name: 'Fulana', id: 1 },
    { name: 'Cicrana', id: 4 },
];


const DeliveryCake = ({ navigation }) => {
    const isDarkTheme = useColorScheme() === 'dark';
    const [cakeSupports, , , saveCakeSupport,] = useCakeSupport();
    const [clients, saveClient,] = useClient();
    const [ , , saveEntry] = useEntry();
    const [selectedCakeSupport, setSelectedCakeSupport] = useState();
    const sizeQrCode = 100;
    const [qrCode, setQrCode] = useState(null);
    const [qrCodeMsg, setQrCodeMsg] = useState("");
    const [clientName, setClientName] = useState();
    const [clientMsg, setClientMsg] = useState("");
    const [phone, setPhone] = useState();
    const [phoneMask, setPhoneMask] = useState();
    const [phoneMsg, setPhoneMsg] = useState("");
    const [clientToSave, setClientToSave] = useState(null);
    const [modalClientEntry, setModalClientEntry] = useState(false);
    const [clientPickerModalVisible, setClientPickerModalVisible] = useState(false);
    const [modalScanner, setModalScanner] = useState(false);
    const [modalSucessMsg, setModalSucessMsg] = useState(false);

    const onQrCodeDetected = (qrCode) => {
        if (validateQrCode(qrCode)){
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
        if(qrCode){
            let queryCakeSupports = cakeSupports.filter(item => item.description === qrCode.data);
            if (queryCakeSupports.length > 0){
                if (queryCakeSupports[0].isOut === false){
                    setSelectedCakeSupport(queryCakeSupports[0]);
                    return true;
                }
                else{
                    setQrCodeMsg("*O suporte já está em uso.");
                    return false;
                }
            }
            else{
                setQrCodeMsg("*O suporte não está cadastrado no aplicativo.");
                return false;
            }
        }
        else{
            setQrCodeMsg("*É preciso escanear o código do suporte para realizar a entrega do bolo");
            return false;
        }
    }

    const onSubmitClient = (client) => {
        setClientToSave(client);
        saveClient(client);
    }

    const onClientSelected = (client) => {
        setClientToSave(client);
    }

    const validateClientToSave = () => {
        console.log(clientToSave);
        if(clientToSave === null){
            setClientMsg('*É necessário escolher um cliente para realizar a entrega do bolo');
            return false;
        }
        else{
            return true;
        }
    }

    const validateFields = () => {
        let qrCodeField = validateQrCode(qrCode);
        let clientToSaveField = validateClientToSave();
        return qrCodeField && clientToSaveField;
    }

    const onSubmit = () =>{
        if (validateFields()){
            if (true){
                const cakeSupportToSave = {
                    id: selectedCakeSupport.id,
                    description: selectedCakeSupport.description,
                    isOut: true,
                };
                const newEntry = {
                    entryAt: new Date(),
                    closeAt: null,
                    timeElapsed: null,
                    client: clientToSave,
                    cakeSupport: cakeSupportToSave,
                };
                saveCakeSupport(cakeSupportToSave);
                saveEntry(newEntry);
                setModalSucessMsg(true);
                console.log('newEntry :: ', newEntry);
            }
        }
    }

    return (
        
        <View
            behavior='height'
            style={
                [stylesLocal.container,
                isDarkTheme
                    ? { backgroundColor: "#000" }
                    : { backgroundColor: "#fff" }
                ]
            }>
            <Container
                isDarkTheme={isDarkTheme}
                flex={1}
                justifyContent={"flex-start"}
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
                    msg="Bolo entregue com sucesso!"
                />
                {qrCode &&
                    <View style={styles.qrCode}>
                        <QRCode
                            size={sizeQrCode}
                            value={qrCode.data}
                        />
                    </View>
                }


                <ModalClientEntry 
                    isVisible={modalClientEntry}
                    setIsVisible={setModalClientEntry}
                    isDarkTheme={isDarkTheme}
                    clientMsg={clientMsg}
                    clientName={clientName}
                    setClientName={setClientName}
                    setClientMsg={setClientMsg}
                    phone={phone}
                    phoneMsg={phoneMsg}
                    phoneMask={phoneMask}
                    setPhone={setPhone}
                    setPhoneMsg={setPhoneMsg}
                    setPhoneMask={setPhoneMask}
                    onSubmitClick={onSubmitClient}
                />
                {clients &&
                    <ClientPicker
                        data={clients}
                        isModalVisible={clientPickerModalVisible}
                        setIsModalVisible={setClientPickerModalVisible}
                        onSelectedValue={onClientSelected}
                        isDarkTheme={isDarkTheme}
                    />
                }
                
               
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
                    value={clientToSave ? clientToSave.name : ""}
                    isEditable={false}
                />
                {clientMsg !== "" && <Text style={styles.smallLabelAlert}>{clientMsg}</Text>}

                <ButtonApp
                    isDarkTheme={isDarkTheme}
                    label='Ler QR Code'
                    onPress={() => setModalScanner(true)}
                />

                <ButtonApp
                isDarkTheme={isDarkTheme}
                    label={'Escolha um cliente'}
                    onPress={() => setClientPickerModalVisible(true)}
                />

                <ButtonApp
                    isDarkTheme={isDarkTheme}
                    label='Novo Cliente'
                    onPress={() => {
                        setClientMsg('');
                        setModalClientEntry(true);
                    }}
                />

                <ButtonApp
                    isDarkTheme={isDarkTheme}
                    label='Realizar entrega'
                    onPress={() => onSubmit()}

                />

            </Container>
        </View>
          
    )
}

const stylesLocal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 0,
        justifyContent: 'flex-start',
        paddingTop: 10,
    },
    form: {
        flex: 1,
        alignItems: 'center',
    },
    flatlistView :{
        flex: 1,
        padding: 10,
        minWidth: '90%',
        borderRadius: 10,
    },
});

export default DeliveryCake;

