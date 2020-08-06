import React from 'react'
import { View, Text } from 'react-native'
import firebase from 'react-native-firebase';
export default function HomeScreen() {
    console.log(firebase.auth())
    return (
        <View>
            <Text>Hello Home</Text>
        </View>
    )
}
