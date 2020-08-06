import React,{useEffect} from 'react'
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

export default function AuthScreen({navigation}) {
    console.log(navigation)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color='red' />
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
