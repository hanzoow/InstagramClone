import React,{useState} from 'react'
import { View, Text,TextInput,Button } from 'react-native'
import firebase from 'react-native-firebase';
export default function SignInScreen({navigation}){
    const [userName,setUserName] = useState('');
    const [password, setPassword] = useState('');
    onRegisterNewAccount = () => {
        firebase.auth().createUserWithEmailAndPassword(userName,password).then(()=>{
            navigation.navigate('Home')
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TextInput placeholder="User name" onChangeText={(userName)=>setUserName(userName)} />
        <TextInput placeholder="Password" onChangeText={(password)=>setPassword(password)}/>
        <Button
            title='Sign up'
            onPress={()=>onRegisterNewAccount()}
        />
      </View>
    );
}
