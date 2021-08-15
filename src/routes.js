import React from 'react';
import { useColorScheme, Dimensions } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import NewCakeSupport from './pages/NewCakeSupport';
import DeliveryCake from './pages/DeliveryCake';
import ReceiveCakeSupport from './pages/ReceiveCakeSupport';
import Colors from './styles/Colors';

const WIDTH = Dimensions.get('window').width;

const Stack = createStackNavigator();

const StackScreens = () => {

    const scheme = useColorScheme() === 'dark';

    return (
        <Stack.Navigator
            initialRouteName="Main"
            
            
        >
            <Stack.Screen 
                name="Main" 
                component={Main}
                options={{
                    title: 'Cadê minha boleira?',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: scheme ? '#000' : '#fff',
                    },
                    headerTintColor: scheme ? Colors.white : Colors.deepRose
                }}
                />
            <Stack.Screen 
                name="NewCakeSupport" 
                component={NewCakeSupport} 
                options={{
                    title: 'Cadastro de Suporte',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: scheme? '#000': '#fff',
                    },
                    headerTintColor: scheme? Colors.white: Colors.deepRose,
                    
                }}
            />
            <Stack.Screen 
                name="DeliveryCake" 
                component={DeliveryCake} 
                options={{
                    title: 'Entregar Bolo',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: scheme ? '#000' : '#fff',
                    },
                    headerTintColor: scheme ? Colors.white : Colors.deepRose,

                }}
            />
            <Stack.Screen 
                name="ReceiveCakeSupport" 
                component={ReceiveCakeSupport} 
                options={{
                    title: 'Receber Suporte',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: scheme ? '#000' : '#fff',
                    },
                    headerTintColor: scheme ? Colors.white : Colors.deepRose,

                }}
            />
            
        </Stack.Navigator>
    );
}


const Routes = () => {

    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >
            <StackScreens />
        </NavigationContainer>
    );
}


export default Routes;
