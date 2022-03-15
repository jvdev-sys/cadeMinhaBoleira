import { Linking, Platform } from "react-native";

const WhatsApp = (phoneWithCountryCode) =>{
    let msg = '';

    let mobile = Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
    if (mobile) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url).then((data) => {
            console.log('WhatsApp Opened');
        }).catch(() => {
            alert('Tenha certeza de ter o WhatsApp instalado no seu dispositivo');
        });
    } else {
        alert('Please insert mobile no');
    }
}
export default WhatsApp;