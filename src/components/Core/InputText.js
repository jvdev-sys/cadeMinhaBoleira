import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import Colors from '../../styles/Colors';

const InputText = ({
    label,
    isDarkTheme,
    isMasked, 
    value,
    isEditable,
    onChangeText=()=>{}
    }) => {
    
        return (
        <View style={styles.textInputView}>
                <Text style={isDarkTheme ? styles.labelDark : styles.labelLight}>{label}</Text>
            {!isMasked ? 
                <TextInput
                    style={isDarkTheme ? styles.inputTextDark : styles.inputTextLight}
                    placeholder={label}
                    value={value}
                    editable={isEditable}
                    onChangeText={text => onChangeText(text)}
                />
            :
                <TextInputMask
                    type={'cel-phone'}
                    style={isDarkTheme ? styles.inputTextDark : styles.inputTextLight}
                    placeholder={label}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={value}
                    includeRawValueInChangeText={true}
                        onChangeText={(maskedValue, rawValue) => {
                            onChangeText(maskedValue, rawValue)
                    }}
                />
            }
        </View>
    )
}

export default InputText;

const styles = StyleSheet.create({
    textInputView: {
        minWidth: '90%'
    },
    labelDark: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10,
    },
    labelLight: {
        color: Colors.deepRose,
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10,
    },
    inputTextDark: {
        backgroundColor: Colors.asphalt,
        borderRadius: 10,
        fontSize: 18,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    inputTextLight: {
        color: Colors.asphalt,
        backgroundColor: Colors.creamyPeach,
        borderRadius: 10,
        fontSize: 18,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
})
