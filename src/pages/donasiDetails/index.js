import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,ScrollView, ImageBackground } from 'react-native'
import { Btn, Gap } from '../../components';
import { callApi } from '../../config';

const DonasiDetails = ({navigation,route}) => {
    const {id} = route.params;
    const [donate,setDonate] = useState([])

    useEffect(()=>{
        callApi("GET",`donasi/${id}`)
        .then((re)=>{
            setDonate(re.data)
            console.log(re)
        })
        .catch(er=>{
            console.log(er)
        })
    },[])
    return (
        <ScrollView style={{paddingHorizontal: 15}}>
            <Gap height={40}/>
                {
                    <View style={{width: "100%",backgroundColor: 'white',marginBottom: 15}}>
                        <ImageBackground source={{uri: donate.gambar}} style={{height: 150}}></ImageBackground>
                        <Gap height={10}/>
                        <Text style={{fontSize: 17,fontWeight: 'bold',fontFamily: "Cochin"}}>{donate.title_donasi}</Text>
                        <Gap height={10}/>
                        <Text>{donate.description_donasi}</Text>
                        <Gap height={15}/>
                        <Text>Korban : {donate.nama_korban}</Text>
                        <Text>Penyakit yang diderita : {donate.penyakit_yang_diderita}</Text>
                        <Text>Alamat : {donate.alamat_korban}</Text>
                        <Gap height={20}/>
                        <Text>Untuk Itu Kami membutuhkan uluran donasi dari kalian smua dengan melalui :</Text>
                        <Gap height={5}/>
                        <Text>Payment : {donate.payment}</Text>
                        <Text>Payment Name : {donate.payment_name}</Text>
                        <Text>Keterangan Transafer : {donate.paycode}</Text>
                        <Gap height={40}/>
                        <Btn label="Kembali" onPress={()=>{ navigation.goBack()}}/>
                    </View>
                }
        </ScrollView>
    )
}

export default DonasiDetails

const styles = StyleSheet.create({})
