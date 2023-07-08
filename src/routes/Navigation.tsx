import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/auth/login';
import Regisration from '../screens/auth/Registration';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false, animation: "fade"}}>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="registration" component={Regisration}/>
        </Stack.Group>
        <Stack.Group screenOptions={{headerShown: false, animation: "fade"}}>
          <Stack.Screen name="homeRoute" component={TabNavigation}/>
        </Stack.Group>
    </Stack.Navigator>
  );
}