import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Btn, Gap } from '../../components';
import { callApi } from '../../config';

const DetailsPengumuman = ({navigation,route}) => {
    const [berita,setBerita] = useState('');
    const {id} = route.params;
    useEffect(()=>{
        callApi("GET",`beritaacara/${id}`)
        .then((res)=>{
          setBerita(res.data)
          console.log(res.data)  
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white',paddingHorizontal: 15}}>
            <Gap height={15}/>
            {
                    
                    <View style={{width: "100%",backgroundColor: 'white',marginBottom: 15}}>
                        <ImageBackground source={{uri: berita.gambar}} style={{height: 150}}></ImageBackground>
                        <Gap height={10}/>
                        <Text style={{fontSize: 17,fontWeight: 'bold',fontFamily: "Cochin"}}>Berita : </Text>
                        <Gap height={10}/>
                        <Text>{berita.deskripsi_kejadian}</Text>
                        <Gap height={15}/>
                        <Text style={{fontSize: 17,fontWeight: 'bold',fontFamily: "Cochin"}} >Details : </Text>
                        <Gap height={15}/>
                        <Text>Nopol : {berita.nopol}</Text>
                        <Text>Nra : {berita.nra}</Text>
                        <Text>Nama : {berita.full_name}</Text>
                        <Text>Addres : {berita.alamat}</Text>
                        <Text>Tanggal Kejadian: {berita.tanggal}</Text>
                        <Text>Status : Dilariakan Ke Rs Melati Tangerang</Text>
                        <Gap height={15}/>
                        <Btn label="Kembali" onPress={()=>{navigation.goBack()}}/>
                    </View>
            }
        </ScrollView>
    )
}

export default DetailsPengumuman

const styles = StyleSheet.create({})
