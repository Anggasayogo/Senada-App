import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground,Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Btn, Gap, Headers } from '../../components';
import { callApi } from '../../config';

const Pengumuman = ({navigation}) => {
    const [berita,setBerita] = useState([]);

    useEffect(()=>{
        callApi("GET",`beritaacara`)
        .then(res=>{
            setBerita(res.data)
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <View style={styles.page}>
            <Headers height={60} title="Berita Acara" onPress={()=>{navigation.goBack()}}/>
            <Gap height={15}/>
            <ScrollView style={{paddingHorizontal: 15}}>
                {
                    berita.map((e,i)=>{
                        return <View key={i} style={{width: "100%",backgroundColor: 'white',marginBottom: 15}}>
                        <ImageBackground source={{uri: e.gambar}} style={{height: 150}}></ImageBackground>
                        <Gap height={10}/>
                        <Text style={{fontSize: 17,fontWeight: 'bold',fontFamily: "Cochin"}}>Berita : </Text>
                        <Gap height={10}/>
                        <Text>{e.deskripsi_kejadian}</Text>
                        <Gap height={15}/>
                        <Btn label="Lihat Detail" onPress={()=>{navigation.navigate("DetailsPengumuman",{
                            "id" : e.id_kasus
                        })}}/>
                        </View>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Pengumuman;

const styles = StyleSheet.create({
    page:{
        flex : 1,
    }
})
