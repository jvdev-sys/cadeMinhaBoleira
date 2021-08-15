import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Modal from 'react-native-modal';
import Colors from '../styles/Colors';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default ({
    data,
    isModalVisible,
    setIsModalVisible,
    isDarkTheme,
    onSelectedValue,
}) => {

    

    const onPressItem = (data) => {
        setIsModalVisible(false);
        onSelectedValue(data);
    }

    const options = data.map((item, index) =>
        <TouchableOpacity
            style={styles.option}
            onPress={() => onPressItem(item)}
            key={index}
        >
            <Text style={[styles.itemOption,{color: isDarkTheme ?Colors.white :Colors.deepRose}]}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (

        <Modal
            isVisible={isModalVisible}
            statusBarTranslucent={true}
            animationType='fade'
            onRequestClose={() => setIsModalVisible(false)}
        >

            <TouchableOpacity
                style={styles.container}
                onPress={() => setIsModalVisible(false)}
            >
                <View style={[styles.modal, {backgroundColor: isDarkTheme? '#000': '#fff'}]}>
                    <Text style={
                        [styles.title,
                        {
                            color: isDarkTheme ? Colors.white : Colors.deepRose,
                            borderColor: isDarkTheme ? '#000' : '#fff',
                            borderBottomColor: isDarkTheme ? Colors.white : Colors.deepRose,
                        }
                        ]}>Escolha um cliente: </Text>
                    <ScrollView>
                        {options}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        width: WIDTH / 2,
        height: HEIGHT / 4,
        
    },
    title:{
        fontSize: 16,
        margin: 10,
        borderWidth: 1,
    },
    option: {
        alignItems: 'flex-start',
    },
    itemOption: {
        margin: 10,
        fontWeight: 'bold',
    }
})
