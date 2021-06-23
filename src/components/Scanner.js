import React,{useState} from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera';
import ButtonApp from './Core/ButtonApp';

const Scanner = ({onQrCodeDetected, onCloseScanner, isDarkTheme}) => {
    const [camera, setCamera] = useState();
   

    const onBarCodeDetected = ({barcodes}) =>{
        if(barcodes){
           
            barcodes.forEach(barcode => {
                if (barcode.type === 'QR_CODE') {
                    onQrCodeDetected(barcode);
                    }
                }
            );              
        }
    }

    return (
        <View style={{
            flex: 1,
            width: '100%',
        }} >
            <RNCamera 
                ref={ref => setCamera(ref)}
                style={{
                    flex: 1,
                    width: '100%',
                }}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                androidCameraPermissionOptions={{
                    title: "Permissão para usar a câmera",
                    message: "Precisamos da sua permissão para usar a câmera.",
                    buttonPositive: "Ok",
                    buttonNegative: "Cancelar"
                }}
                captureAudio={false}
                onGoogleVisionBarcodesDetected={onBarCodeDetected}
            >
                <View style={styles.buttonView}>
                    <ButtonApp label='Fechar' isDarkTheme={isDarkTheme} onPress={() => onCloseScanner()} />
                    
                </View>
                
            </RNCamera>
        </View>
    )
}

export default Scanner;

const styles = StyleSheet.create({
    camera: {
        flex: 1,
    },
    buttonView: {
        flexDirection: 'row',
        flex: 0,
        bottom: 10,
        position: 'absolute',
        alignSelf:'center'
    }
})
