import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import uuid from 'react-native-uuid';
import styles from '../../styles/styles';
import InputText from './InputText';
import ButtonApp from './ButtonApp';
import Title from './Title';
import Container from './Container';

const WIDTH = Dimensions.get('window').width;
const HEIGHT =
    Platform.OS === 'ios'
        ? Dimensions.get('window').height
        : ExtraDimensions.getRealWindowHeight();

const ModalClientEntry = ({
    isVisible,
    setIsVisible,
    isDarkTheme,
    clientName,
    setClientName,
    clientMsg,
    setClientMsg,
    phone,
    setPhone,
    phoneMask,
    setPhoneMask,
    phoneMsg,
    setPhoneMsg,
    onSubmitClick,
}) => {

    
    const validateNameClient = (text) => {
        if (text) {
            if (text.length < 2) {
                setClientMsg("*O nome do cliente precisa ter pelo menos 2 caracteres");
                return false;
            }
            else {
                setClientMsg("");
            }
        }
        else {
            setClientMsg("*É preciso preencher o nome do cliente para realizar a entrega do bolo");
            return false;
        }
        return true;
    }

    const onChangedClient = (text) => {
        setClientName(text);
        validateNameClient(text);
    }


    const validatePhone = (rawValue) => {
        if (rawValue) {
            if (rawValue.length < 11) {
                setPhoneMsg("*É preciso preencher o telefone do cliente para realizar a entrega do bolo");
                return false;
            }
            setPhoneMsg("");
            return true;
        }
        else {
            setPhoneMsg("*É preciso preencher o telefone do cliente para realizar a entrega do bolo");
            return false;
        }
    }

    const onChangePhone = (maskedValue, rawValue) => {
        setPhone(rawValue);
        setPhoneMask(maskedValue);
        validatePhone(rawValue);
    }

    const validateFields = () => {

        let isClientValidField = validateNameClient(clientName);
        let isPhoneValidField = validatePhone(phone);

        return isClientValidField && isPhoneValidField;
    }

    const onNewClientClick = () => {
        if (validateFields()){
            const newClient = {
                id: uuid.v4(),
                phone: phone,
                phoneMask: phoneMask,
                name: clientName,
            };
            console.log(newClient);
            onSubmitClick(newClient);
            setClientName(null);
            setPhoneMask(null);
            setPhone(null);
            setIsVisible(false);
        }
    }

    const onCancelClick = () => {
        setClientMsg("");
        setPhoneMsg("");
        setIsVisible(false);
       
    }

    return (
        <Modal
            isVisible={isVisible}
            animationIn='fadeIn'
            statusBarTranslucent={true}
            deviceWidth={WIDTH}
            deviceHeight={HEIGHT}
        >
            <KeyboardAvoidingView
                behavior={'position'}
                keyboardVerticalOffset={HEIGHT/8}
            >
                <Container isDarkTheme={isDarkTheme} borderRadius={10}>
                    <Title isDarkTheme={isDarkTheme} label={"Novo Cliente"} />
                    <InputText
                        isDarkTheme={isDarkTheme}
                        label='Cliente'
                        isMasked={false}
                        value={clientName}
                        onChangeText={(text) => onChangedClient(text)}
                        isEditable={true}
                    />
                    {clientMsg !== "" && <Text style={styles.smallLabelAlert}>{clientMsg}</Text>}

                    <InputText
                        isDarkTheme={isDarkTheme}
                        label='Telefone'
                        isMasked={true}
                        value={phone}
                        onChangeText={onChangePhone}
                    />
                    {phoneMsg !== "" && <Text style={styles.smallLabelAlert}>{phoneMsg}</Text>}
                    <ButtonApp
                        isDarkTheme={isDarkTheme}
                        label='Salvar Novo Cliente'
                        onPress={() => onNewClientClick()}
                        minWidth="40%"
                    />
                    <ButtonApp
                        isDarkTheme={isDarkTheme}
                        label='Cancelar'
                        onPress={() => onCancelClick()}
                        minWidth="40%"
                    />
                </Container>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default ModalClientEntry


