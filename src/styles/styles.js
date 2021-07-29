import { StyleSheet} from 'react-native';
import Colors from './Colors';


const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        marginBottom: 30,
    },
    mainContainerDark: {
        padding: 20,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    mainContainerLight: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    flex0: {
        flex: 0,
    },
    flex1: {
        flex: 1,
    },
    smallLabelDark: {
        minWidth: "90%",
        minHeight: 40,
        textAlign: 'center',
        color: Colors.white,
        fontSize: 18,
        fontWeight: '400',
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
    },
    smallLabelLight: {
        minWidth: "90%",
        minHeight: 40,
        textAlign: 'center',
        color: Colors.deepRose,
        fontSize: 18,
        fontWeight: '400',
        borderColor: Colors.deepRose,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
    },
    smallLabelAlert: {
        textAlign: 'left',
        color: Colors.darkRed,
        fontSize: 14,
        fontWeight: '400',
        paddingHorizontal: 10,
        paddingBottom: 20,
        marginTop: -15,
    },

    titleView: {
        marginTop: 20,
        marginBottom: 20,
    },
    titleLabelDark: {
        color: Colors.white,
        fontSize: 25,
        fontWeight: '700',
    },
    titleLabelLight: {
        color: Colors.deepRose,
        fontSize: 25,
        fontWeight: '700',
    },
    qrCode: {
        margin: 10,
        opacity: 0.7,
    },
})

export default styles;