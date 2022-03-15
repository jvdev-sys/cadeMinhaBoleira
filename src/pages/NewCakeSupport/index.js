import React, {useState, useEffect} from 'react'
import { 
    Text, 
    StatusBar, 
    useColorScheme, 
    Alert, 
    View, 
    Modal, 
    TouchableOpacity, 
    FlatList 
} from 'react-native';
import uuid from 'react-native-uuid';
import useCakeSupport from '../../hooks/useCakeSupport';
import QRCode from 'react-native-qrcode-svg';
import styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Scanner from '../../components/Scanner';
import Container from '../../components/Core/Container';
import ButtonApp from '../../components/Core/ButtonApp';
import Title from '../../components/Core/Title';
import InputText from '../../components/Core/InputText';
import Colors from '../../styles/Colors';

/* const cakeSupports = [
    {
        id: 1,
        description: "Suporte 1",
    }, 
    {
        id: 2,
        description: "Suporte 2",
    },
    {
        id: 3,
        description: "Suporte 3",
    },
] */

const NewCakeSupport = ({navigation}) => {

    let isDarkTheme = useColorScheme() === 'dark';

    const [
        cakeSupports, 
        setCakeSupports, 
        getCakeSupports, 
        saveCakeSupport,
         deleteCakeSupport
        ] = useCakeSupport();

    const [qrCode, setQrCode] = useState();
    const [qrCodeMsg, setQrCodeMsg] = useState("");
    const [modalScanner, setModalScanner] = useState(false);
    const [onSuccessMsg, setOnSuccessMsg] = useState("");
    const [colorMsg, setColorMsg] = useState();

    const validateQrCode = () => {
        if (qrCode) {
            setQrCodeMsg("");
            return true;
        }
        else {
            setQrCodeMsg("*É preciso escanear o código do suporte para realizar o cadastro.");
            return false;
        }
    }

    const onQrCodeDetected = (qrCode) => {
        setQrCode(qrCode);
        setQrCodeMsg("");
        onCloseScanner();
    }

    const onCloseScanner = () =>{
        setModalScanner(false);
    }

    const onSubmit = async () => {
        if(validateQrCode()){
            const data = {
                id: uuid.v4(),
                isOut: false,
                description: qrCode.data
            }
            saveCakeSupport(data);
            let cakeSupportsTemp = await getCakeSupports();
            setCakeSupports(cakeSupportsTemp);
            setQrCode(null);
            setColorMsg(Colors.secondary);
            setOnSuccessMsg(`${data.description} cadastrado com sucesso!`);
            console.log(cakeSupports, cakeSupports.length);
        }
    }

    const onDelete = async (cakeSupport) => {
        
        deleteCakeSupport(cakeSupport);
        setColorMsg(Colors.deepRose);
        setOnSuccessMsg(`${cakeSupport.description} excluído com sucesso!`);
        let cakeSupportsTemp = await getCakeSupports();
        setCakeSupports(cakeSupportsTemp);
        
    }

    const renderItem = ({ item }) => (

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text
                    style={isDarkTheme
                        ? styles.tableLabelDark
                        : styles.tableLabelLight}
                >{item.description.length > 17
                    ? item.description.split("").slice(0, 17).join("") + "..."
                    : item.description}</Text>
                <TouchableOpacity onPress={() => onDelete(item)}>
                    <Icon name="delete" size={25} color={isDarkTheme?Colors.white:Colors.deepRose} />
                </TouchableOpacity>
            </View>

    );

    return (
        <>
            <Container
                isDarkTheme={isDarkTheme}
                flex={0}
                justifyContent='flex-start'
            >
                <StatusBar
                    barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                    backgroundColor={'transparent'}
                    translucent={true}
                />
                <Modal visible={modalScanner} animationType='fade' statusBarTranslucent={true}>
                    <Scanner onQrCodeDetected={onQrCodeDetected} onCloseScanner={onCloseScanner} isDarkTheme={isDarkTheme}/>
                </Modal>
                
                {qrCode && 
                    <View style={styles.qrCode}>
                        <QRCode
                            size={100}
                            value={qrCode.data}
                        />
                    </View>
                }
                
            </Container>
            <Container
                isDarkTheme={isDarkTheme}
                flex={1}
                justifyContent='flex-start'
            >
                <ButtonApp isDarkTheme={isDarkTheme} label='Ler QR Code' onPress={()=>setModalScanner(true)}/>
                <InputText
                    isDarkTheme={isDarkTheme}
                    label='QR Code'
                    isMasked={false}
                    value={qrCode?qrCode.data:""}
                    isEditable={false}
                />
                {qrCodeMsg !== "" && <Text style={styles.smallLabelAlert}>{qrCodeMsg}</Text>}
                <ButtonApp 
                    isDarkTheme={isDarkTheme} 
                    label='Cadastrar Boleira' 
                    onPress={() => onSubmit()}
                />
                {
                    cakeSupports.length > 0 &&
                    <>
                        <Text
                            style={isDarkTheme
                                ? styles.secondaryTitleLabelDark
                                : styles.secondaryTitleLabelLight}
                        >
                            Boleiras cadastradas
                        </Text>

                        <View style={isDarkTheme ? styles.tableViewDark : styles.tableViewLight}>
                            <FlatList
                                data={cakeSupports}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                            />
                        </View>
                    </>
                }
                    
                
                {onSuccessMsg !== "" &&
                    <Text
                        style={[isDarkTheme
                        ? styles.MsgLabellDark
                        : styles.MsgLabelLight,{color: colorMsg}]}
                    >
                        {onSuccessMsg}
                    </Text>
                }
                
            </Container>
            
        </>
    )
}

export default NewCakeSupport;


