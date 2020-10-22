import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView,ImageBackground } from 'react-native'
import {Btn, Gap, Headers} from '../../components';
import { callApi } from '../../config';

const Kopdar = ({navigation}) => {
    const [kopdar,setKopdar] = useState([])
    useEffect(()=>{
        callApi("GET","kopdar")
        .then((res)=>{
            setKopdar(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <View style={styles.page}>
            <Headers height={60} onPress={()=>{navigation.goBack()}} title="Kopdar"/>
            <Gap height={40}/>
            <ScrollView style={{paddingHorizontal: 15}}>
                {
                    kopdar.map((e,i)=>{
                        return <View key={i} style={{width: "100%",backgroundColor: 'white',marginBottom: 15}}>
                        <ImageBackground source={{uri: e.gambar}} style={{height: 150}}></ImageBackground>
                        <Gap height={10}/>
                        <Text style={{fontSize: 17,fontWeight: 'bold',fontFamily: "Cochin"}}>{e.title_kopdar}</Text>
                        <Gap height={10}/>
                        <Text>{e.description_kopdar}</Text>
                        <Gap height={15}/>
                        <Text>Location : {e.tujuan_lokasi}</Text>
                        <Gap height={15}/>
                        <Btn label="Lihat Detail"/>
                        </View>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Kopdar

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: 'white'
    }
})
