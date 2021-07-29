import React, {useState, useEffect} from 'react'
import { Text, StatusBar, useColorScheme, Alert, View, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from '../../styles/styles';
import Colors from '../../styles/Colors';
import Scanner from '../../components/Scanner';
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import InputText from '../../components/Core/InputText';


const NewCakeSupport = ({navigation}) => {

    let isDarkTheme = useColorScheme() === 'dark';
    const [qrCode, setQrCode] = useState();
    const [qrCodeMsg, setQrCodeMsg] = useState("");
    const [modalScanner, setModalScanner] = useState(false);

    
    const validateQrCode = () => {
        if (qrCode) {
            setQrCodeMsg("");
            return true;
        }
        else {
            setQrCodeMsg("É preciso escanear o código do suporte para realizar a entrega do bolo");
            return false;
        }
    }

    const onQrCodeDetected = (qrCode) => {
        setQrCode(qrCode);
        setQrCodeMsg("");
        onCloseScanner();
    }

    const onCloseScanner = () =>{
        setModalScanner(false);
    }

    const onSubmit = () =>{
        if(validateQrCode()){
            Alert.alert("Campo válido");
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
                <Modal visible={modalScanner} animationType='fade'>
                    <Scanner onQrCodeDetected={onQrCodeDetected} onCloseScanner={onCloseScanner} isDarkTheme={isDarkTheme}/>
                </Modal>
                <Title label='Cadastro de Suportes' isDarkTheme={isDarkTheme}/>
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
                <ButtonApp isDarkTheme={isDarkTheme} label='Ler QR Code' onPress={()=>setModalScanner(true)}/>
                <InputText
                    isDarkTheme={isDarkTheme}
                    label='QR Code'
                    isMasked={false}
                    value={qrCode?qrCode.data:""}
                    isEditable={false}
                />
                {qrCodeMsg !== "" && <Text style={styles.smallLabelAlert}>{qrCodeMsg}</Text>}
                <ButtonApp 
                    isDarkTheme={isDarkTheme} 
                    label='Cadastrar QR Code' 
                    onPress={() => onSubmit()}
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


export default NewCakeSupport;


