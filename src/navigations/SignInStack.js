import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './../screens/sign_in';
import SignUpScreen from '../screens/sign_up';
const Stack = createStackNavigator();

export default function SignInStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
