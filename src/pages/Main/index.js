import React, { useState } from 'react'
import {
    StatusBar,
    useColorScheme,
    View,
    TouchableOpacity,
    Text,
    FlatList,
    Dimensions,
    StyleSheet,
} from 'react-native';

import styles from '../../styles/styles';
import Logo from '../../assets/bolo.svg'
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';

import SecondaryTitle from '../../components/Core/SecondaryTitle';
import useEntry from '../../hooks/useEntry';
import WhatsAppModal from '../../components/WhatsAppModal';
import WhatsApp from '../../services/WhatsApp';

const WIDTH = Dimensions.get('screen').width;


const Main = ({ navigation }) => {

    let isDarkTheme = useColorScheme() === 'dark';
    const [, entriesFiltered,] = useEntry();
    const [isWhatsAppModalVisible, setIsWhatsAppModalVisible] = useState(false);
    const [msg, setMsg] = useState("");
    const [clientSelected, setClientSelected] = useState(null);

    const sendMsgWhatsApp = (item) => {
        setMsg(`Deseja enviar mensagem para o número ${item.phoneMask} de ${item.name}?`);
        setClientSelected(item);
        setIsWhatsAppModalVisible(true);
    }

    const openWhatsApp = () => {
        WhatsApp("55"+clientSelected.phone);
        setIsWhatsAppModalVisible(false)
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            onPress={() => sendMsgWhatsApp(item.client)}
            style={stylesLocal.tableItem}
        >
            <View >
                <Text
                    style={isDarkTheme
                        ? styles.tableLabelDark
                        : styles.tableLabelLight
                    }
                >{item.client.name.length > 14
                    ? item.client.name.split("").slice(0, 14).join("") + "..."
                    : item.client.name
                    }</Text>
            </View>
            <View style={{ position: 'absolute', right: (WIDTH / 4) - 5 }}>
                <Text
                    style={isDarkTheme
                        ? styles.tableLabelDark
                        : styles.tableLabelLight}
                >{item.client.phoneMask}</Text>
            </View>
            <View>
                <Text
                    style={isDarkTheme
                        ? styles.tableLabelDark
                        : styles.tableLabelLight}
                >{item.cakeSupport.description.length > 17
                    ? item.cakeSupport.description.split("").slice(0, 17).join("") + "..."
                    : item.cakeSupport.description}</Text>
            </View>

        </TouchableOpacity>
    );

    return (
        <>
            

            <Container
                flex={0}
                isDarkTheme={isDarkTheme}
                style={styles.buttonContainer}
                
            >
                <Logo width="100%" height="150" style={{marginBottom: 20}}/>
                <WhatsAppModal
                    isDarkTheme={isDarkTheme}
                    isVisible={isWhatsAppModalVisible}
                    msg={msg}
                    onPress={() => openWhatsApp()}
                    onClose={() => setIsWhatsAppModalVisible(false)}
                />
                <StatusBar
                    barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                    backgroundColor={'transparent'}
                    translucent={true}
                />
                <ButtonApp isDarkTheme={isDarkTheme} label='Cadastro de Boleira' onPress={() => navigation.navigate('NewCakeSupport')} />
                <ButtonApp isDarkTheme={isDarkTheme} label='Entregar Bolo' onPress={() => navigation.navigate('DeliveryCake')} />
                <ButtonApp isDarkTheme={isDarkTheme} label='Receber Boleira' onPress={() => navigation.navigate('ReceiveCakeSupport')} />
                <ButtonApp isDarkTheme={isDarkTheme} label='Lista Negra' onPress={() => navigation.navigate('BlackList')} />
            </Container>
            <Container
                flex={1}
                isDarkTheme={isDarkTheme}
                justifyContent={"center"}
            >
                {entriesFiltered && entriesFiltered.length > 0 &&
                    <>
                        <SecondaryTitle label='Boleiras no mundão!' isDarkTheme={isDarkTheme} />
                        <View style={isDarkTheme ? styles.tableViewDark : styles.tableViewLight}>
                            <View style={stylesLocal.tableItem}>
                                <View >
                                    <Text
                                        style={[isDarkTheme
                                            ? styles.tableLabelDark
                                            : styles.tableLabelLight, {fontWeight: 'bold'}]
                                        }
                                    >Nome do Cliente</Text>
                                </View>
                                <View style={{ position: 'absolute', right: (WIDTH / 4) + 15 }}>
                                    <Text
                                        style={[isDarkTheme
                                            ? styles.tableLabelDark
                                            : styles.tableLabelLight,{fontWeight: 'bold'}]}
                                    >Telefone</Text>
                                </View>
                                <View>
                                    <Text
                                        style={[isDarkTheme
                                            ? styles.tableLabelDark
                                            : styles.tableLabelLight, { fontWeight: 'bold' }]}
                                    >Boleira</Text>
                                </View>
                            </View>
                        

                            <FlatList
                                data={entriesFiltered}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                            />
                        </View>
                    </>
                }
            </Container>
        </>
    );
}

const stylesLocal = StyleSheet.create({
    tableItem :{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
});

export default Main;


