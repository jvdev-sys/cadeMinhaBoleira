import React from 'react'
import {
    StatusBar,
    useColorScheme,
    View,
    TouchableOpacity,
    Text,
    FlatList,
    Dimensions
} from 'react-native';

import styles from '../../styles/styles';
import Logo from '../../assets/bolo.svg'
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import SecondaryTitle from '../../components/Core/SecondaryTitle';
import useEntry from '../../hooks/useEntry';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;


const Main = ({ navigation }) => {

    let isDarkTheme = useColorScheme() === 'dark';
    const [, entriesFiltered,] = useEntry();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
            <View style={{ position: 'absolute', right: (WIDTH / 4) + 20 }}>
                <Text
                    style={isDarkTheme
                        ? styles.tableLabelDark
                        : styles.tableLabelLight}
                >{item.client.phone}</Text>
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
                isDarkTheme={isDarkTheme}
                flex={0}
                style={styles.topContainer}
            >
                <Logo width="100%" height="150" />
            </Container>

            <Container
                flex={0}
                isDarkTheme={isDarkTheme}
                style={styles.buttonContainer}
            >
                <StatusBar
                    barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                    backgroundColor={'transparent'}
                    translucent={true}
                />
                <ButtonApp isDarkTheme={isDarkTheme} label='Cadastro de Boleira' onPress={() => navigation.navigate('NewCakeSupport')} />
                <ButtonApp isDarkTheme={isDarkTheme} label='Entregar Bolo' onPress={() => navigation.navigate('DeliveryCake')} />
                <ButtonApp isDarkTheme={isDarkTheme} label='Receber Boleira' onPress={() => navigation.navigate('ReceiveCakeSupport')} />
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



export default Main;


