import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import StockScreen from '../pages/StockScreen';
import ProfileScreen from '../pages/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Produtos" component={StockScreen} />
                <Stack.Screen name="Perfil" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
