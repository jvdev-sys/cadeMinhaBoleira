import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import NewCakeSupport from './pages/NewCakeSupport';
import DeliveryCake from './pages/DeliveryCake';
import ReceiveCakeSupport from './pages/ReceiveCakeSupport';
import Teste from './pages/Teste';

const Stack = createStackNavigator();

const StackScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}
            
        >
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="NewCakeSupport" component={NewCakeSupport} />
            <Stack.Screen name="DeliveryCake" component={DeliveryCake} />
            <Stack.Screen name="ReceiveCakeSupport" component={ReceiveCakeSupport} />
            
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
