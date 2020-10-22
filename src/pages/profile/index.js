import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { IcUser } from '../../assets';
import {Gap, Headers, List} from '../../components';
import { showMessage } from "react-native-flash-message";

const Profile = ({navigation}) => {
    const [nama,setNama] = useState('')
    useEffect(()=>{
        const _genName = async ()=>{
            const namas = await AsyncStorage.getItem('name')
            setNama(namas)
        }
        _genName();
    },[])
    const handleSubmit = async ()=>{
        await AsyncStorage.removeItem('api_token');
        await AsyncStorage.removeItem('name');
        showMessage({
            message: "Berhasil Keluar!",
            type: "danger",
        });
        navigation.replace("Login");
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1,backgroundColor: 'white'}}>
            <Headers height={60} onPress={()=>{navigation.goBack()}} title="Profile"/>
            <Gap height={50}/>
            <View style={{alignItems: 'center'}}>
                <Image source={IcUser} style={{width: 110,height: 110}}/>
                <Gap height={15}/>
                <Text style={{fontSize: 16}}>{nama}</Text>
            </View>
            <Gap height={40}/>
            <List name="Edit Profile" desc="last Update Yesterday" icon="edit-profile" type="next"/>
            <List name="Language" desc="Available 12 languages" icon="anguage" type="next"/>
            <List name="Give US Rate" desc="On google playstore" icon="rate" type="next"/>
            <List name="Logout" desc="log out for start new session" icon="help" type="next" onPress={handleSubmit}/>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({})
