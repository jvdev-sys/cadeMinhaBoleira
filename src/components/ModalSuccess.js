import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

import Modal from 'react-native-modal';
import ButtonApp from './Core/ButtonApp';
import styles from '../styles/styles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalSuccess = ({ msg, isVisible, onPress, isDarkTheme}) => {

    return (
        <Modal isVisible={isVisible} animationIn='fadeIn' >
            <View style={[isDarkTheme
                    ?styles.mainContainerDark
                    :styles.mainContainerLight, stylesLocal.container]}>
                <Text style={[isDarkTheme
                    ? styles.titleLabelDark
                    :styles.titleLabelLight, stylesLocal.msg]}
                >{msg}</Text>
                <TouchableOpacity onPress={onPress}>
                    <View>
                        <ButtonApp label="Fechar" onPress={onPress} isDarkTheme={isDarkTheme} ></ButtonApp>
                    </View>
                </TouchableOpacity>
            </View>
            
        </Modal>
    )
}

export default ModalSuccess

const stylesLocal = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20,
        borderRadius: 20,
    },
    msg: {
        padding: 20,  
    },

});