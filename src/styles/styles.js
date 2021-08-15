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
        padding: 10,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    mainContainerLight: {
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    flex0: {
        flex: 0,
    },
    flex1: {
        flex: 1,
    },

    labelDark: {
        color: Colors.white,
        fontSize: 14,
        paddingVertical: 5,
    },
    labelLight: {
        color: Colors.white,
        fontSize: 14,
        paddingVertical: 5,
    },
    smallLabelDark: {
       
        minHeight: 20,
        textAlign: 'center',
        color: Colors.white,
        fontSize: 14,
        fontWeight: '400',
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginVertical: 10,
    },
    smallLabelLight: {
        
        minHeight: 20,
        textAlign: 'center',
        color: Colors.deepRose,
        fontSize: 14,
        fontWeight: '400',
        borderColor: Colors.deepRose,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginVertical: 10,
    },
    smallLabelAlert: {
        alignSelf: 'flex-start',
        textAlign: 'left',
        maxWidth: '85%',
        color: Colors.darkRed,
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 25,
        marginBottom: 20,
        marginTop: -15,
    },

    tableLabelDark: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '400',
        padding: 5,
    },
    tableLabelLight: {
        color: Colors.deepRose,
        fontSize: 14,
        fontWeight: '400',
        padding: 5,
    },
    tableViewDark:{
        flex: 1,
        padding: 10,
        minWidth: '90%',
        borderWidth: 1, 
        borderColor: Colors.white,
        borderRadius: 10,
    },
    tableViewLight: {
        flex: 1,
        padding: 10,
        minWidth: '90%',
        borderWidth: 1,
        borderColor: Colors.deepRose,
        borderRadius: 10,
    },

    titleView: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    titleLabelDark: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '700',
    },
    titleLabelLight: {
        color: Colors.deepRose,
        fontSize: 18,
        fontWeight: '700',
    },
    secondaryTitleView: {
        marginTop: 10,
        marginBottom: 10,
    },
    secondaryTitleLabelDark: {
        paddingBottom: 10,
        color: Colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
    secondaryTitleLabelLight: {
        paddingBottom: 10,
        color: Colors.deepRose,
        fontSize: 16,
        fontWeight: '700',
    },
    MsgLabellDark: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: '700',
    },
    MsgLabelLight: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: '700',
    },
    qrCode: {
        margin: 10,
        opacity: 1,
        alignSelf: 'center',
    },
})

export default styles;