import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Btn, Carousel, Gap, Headers } from '../../components';
import { callApi } from '../../config';

const Donasi = ({navigation}) => {
    const [donasi,setDonasi] = useState([])
    useEffect(()=>{
        callApi("GET","donasi")
        .then(res=>{
            setDonasi(res.data);
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <View style={styles.pages}>
            <Headers height={60} onPress={()=>{navigation.goBack()}} title="Donasi"/>
            <View style={{paddingHorizontal: 15}}>
                <Carousel/>
            </View>
            <Gap height={15}/>
            <ScrollView style={{paddingHorizontal: 15}}>
                {
                    donasi.map((e,i)=>{
                        return <View key={i} style={{width: "100%",backgroundColor: 'white',marginBottom: 15}}>
                        <ImageBackground source={{uri: e.gambar}} style={{height: 150}}></ImageBackground>
                        <Gap height={10}/>
                        <Text style={{fontSize: 17,fontWeight: 'bold',fontFamily: "Cochin"}}>{e.title_donasi}</Text>
                        <Gap height={10}/>
                        <Text>{e.description_donasi}</Text>
                        <Gap height={15}/>
                        <Btn label="Lihat Detail" onPress={()=>{ navigation.navigate('DonasiDetails',{ "id" : e.id_donasi }) }}/>
                        </View>
                    })
                }
            </ScrollView>
            <View style={{backgroundColor: 'pink'}}></View>
        </View>
    )
}

export default Donasi

const styles = StyleSheet.create({
    pages : {
        flex: 1,
        backgroundColor: 'white',
    }
})
