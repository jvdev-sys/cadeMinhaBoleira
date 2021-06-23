import React, {useState, useEffect} from 'react'
import { StyleSheet, StatusBar, useColorScheme, Alert, View, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Logo from '../../assets/ivani_bolos.png'
import Colors from '../../styles/Colors';
import Scanner from '../../components/Scanner';
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import InputText from '../../components/Core/InputText';



const NewCakeSupport = () => {

    let isDarkTheme = useColorScheme() === 'dark';
    const [qrCode, setQrCode] = useState();
    const [modalScanner, setModalScanner] = useState(false);

    useEffect(() => {
        function loadScreen()  {
            isDarkTheme = useColorScheme() === 'dark';
        }
        loadScreen();
    }, [useColorScheme()])


    const onQrCodeDetected = (qrCode) => {
        setQrCode(qrCode);
        onCloseScanner();
    }

    const onCloseScanner = () =>{
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
                    backgroundColor={isDarkTheme ? Colors.dark : Colors.light}
                />
                <Modal visible={modalScanner} animationType='fade'>
                    <Scanner onQrCodeDetected={onQrCodeDetected} onCloseScanner={onCloseScanner}/>
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
                
                <ButtonApp 
                    isDarkTheme={isDarkTheme} 
                    label='Cadastrar QR Code' 
                    onPress={()=>Alert.alert('Cadastro QR Code')} 
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
                    onPress={() => Alert.alert('Botão Voltar')}
                />
            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    qrCode: {
        margin: 10,
        opacity: 0.7,
    },
})

export default NewCakeSupport;


