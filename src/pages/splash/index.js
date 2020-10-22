import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(()=>{
        const _validasisession = async ()=>{
            const isLogin = await AsyncStorage.getItem('api_token')
            if(!isLogin){
                navigation.replace("Login")
            }else{
                navigation.replace('Dashboard')
            }
        }
        _validasisession();
    },[])
    return (
        <View style={styles.page}>
            <Text style={styles.title}>SENADA</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#6C63FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    }
})
