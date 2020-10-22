import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { Bglogin } from '../../assets/';
import { Btn, Gap, Input } from '../../components';

const Login = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const handleSubmit = ()=>{
            if(email){
                if(password){
                    Axios.post("https://senada.cikupalearningcenter.com/login/member",{
                'email' : email,
                'password' : password
                })
                .then((res)=>{
                    AsyncStorage.setItem('name',res.data.data.user.full_name)
                    AsyncStorage.setItem('api_token',res.data.data.api_token)
                    showMessage({
                        message: "Success Login !",
                        type: "success",
                    });
                    navigation.replace("Dashboard");
                })
                .catch((err)=>{
                    showMessage({
                        message: "Email atau Password salah!",
                        type: "danger",
                    });
                })
                }else{
                    showMessage({
                        message: "Password tidak boleh kosong!",
                        type: "danger",
                    });
                }

            }else{
                showMessage({
                    message: "Email tidak boleh kosong!",
                    type: "danger",
                });
            }
    }

    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
            <View style={styles.childtop}>
                <Gap height={30}/>
                <Image source={Bglogin} style={{ width: 150, height: 150}}/>
                <Gap height={40}/>
                <Text style={styles.title}>Senada Login</Text>
            </View>
            <View style={styles.childbotoom}>
                <Gap height={20}/>
                <Input label="Email" value={email} onChangeText={(value)=>{ setEmail(value)}}/>
                <Gap height={10}/>
                <Input label="Password" value={password} onChangeText={(value)=>{ setPassword(value)}} secureTextEntry/>
                <Gap height={40}/>
                <Btn label="Login" onPress={handleSubmit}/>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
    },
    title:{
        textAlign: 'center',
        fontSize: 20
    },
    childtop:{
        flex: 1,
        flexDirection: 'column',
    },
    childbotoom:{
        flex: 1,
    }
})
