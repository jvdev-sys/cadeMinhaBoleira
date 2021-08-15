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
    onFocus,
    onBlur,
    isOnFocus = () => { },
    isOnBlur = () => { },
    onChangeText = () => { },
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
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChangeText={text => onChangeText(text)}
                    onFocus={isOnFocus}
                    onBlur={isOnBlur}
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
                    onFocus={onFocus}
                    value={value}
                    onBlur={onBlur}
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
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 10,
    },
    labelLight: {
        color: Colors.deepRose,
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 10,
    },
    inputTextDark: {
        color: Colors.white,
        backgroundColor: Colors.asphalt,
        borderRadius: 20,
        fontSize: 14,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    inputTextLight: {
        color: Colors.asphalt,
        backgroundColor: Colors.creamyPeach,
        borderRadius: 20,
        fontSize: 14,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
})
