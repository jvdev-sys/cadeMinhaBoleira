import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Platform} from 'react-native';

import Modal from 'react-native-modal';
import ButtonApp from './Core/ButtonApp';
import styles from '../styles/styles';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const WIDTH = Dimensions.get('window').width;
const HEIGHT =
    Platform.OS === 'ios'
        ? Dimensions.get('window').height
        : ExtraDimensions.getRealWindowHeight();

const WhatsAppModal = ({ msg, isVisible, onPress, onClose, isDarkTheme }) => {

    return (
        <Modal 
            isVisible={isVisible} 
            animationIn='fadeIn' 
            statusBarTranslucent={true}
            deviceWidth={WIDTH}
            deviceHeight={HEIGHT}
        >
            <View style={[isDarkTheme
                ? styles.mainContainerDark
                : styles.mainContainerLight, stylesLocal.container]}>
                <Text style={[isDarkTheme
                    ? styles.titleLabelDark
                    : styles.titleLabelLight, stylesLocal.msg]}
                >{msg}</Text>
                <TouchableOpacity onPress={onPress}>
                    <View>
                        <ButtonApp label="Enviar Mensagem" onPress={onPress} isDarkTheme={isDarkTheme} ></ButtonApp>
                        <ButtonApp label="Fechar" onPress={onClose} isDarkTheme={isDarkTheme} ></ButtonApp>
                    </View>
                </TouchableOpacity>
            </View>

        </Modal>
    )
}

export default WhatsAppModal;

const stylesLocal = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20,
        borderRadius: 20,
    },
    msg: {
        padding: 20,
        textAlign: 'center',
    },

});