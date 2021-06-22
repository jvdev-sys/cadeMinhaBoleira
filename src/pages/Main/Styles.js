import { StyleSheet, useColorScheme } from 'react-native';
import Colors from '../../styles/Colors';

const isDarkTheme = useColorScheme() === 'dark';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: isDarkTheme ? Colors.background : Colors.light,
        alignItems: 'baseline',
    },

    contentContainer: {
        marginVertical: 20,
        margin
    },

    title: {
        color: isDarkTheme ? Colors.white : Colors.darkRed,
        marginTop: 50,
        fontSize: 25,
        fontWeight: '700',
    },
    smallLabel: {
        color: isDarkTheme ? Colors.white : Colors.darkRed,
        fontSize: 18,
        fontWeight: '400',
    },
});

export default styles;