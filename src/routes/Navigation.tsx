import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={Login}/>
        </Stack.Group>
    </Stack.Navigator>
  )
}