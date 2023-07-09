import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { connect } from 'react-redux';
import Regisration from '../screens/auth/Registration';
import Login from '../screens/auth/login';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

 function Navigation({isLogin}:any) {
  return (
    <Stack.Navigator>
        {!isLogin? <Stack.Group screenOptions={{headerShown: false, animation: "fade"}}>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="registration" component={Regisration}/>
        </Stack.Group>:
        <Stack.Group screenOptions={{headerShown: false, animation: "fade"}}>
          <Stack.Screen name="homeRoute" component={TabNavigation}/>
        </Stack.Group>
        }
    </Stack.Navigator>
  );
}

const mapToStates = (state:any) => ({
  isLogin: state.login.isLogin
});

export default connect(mapToStates)(Navigation)