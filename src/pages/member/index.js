import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Btn, Gap, ListItem, Headers } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { callApi } from '../../config'
import { showMessage } from 'react-native-flash-message'

const Member = ({navigation}) => {
    const [member,setMember] = useState([]);
    const [keyword,setKeyword] = useState('');

    const handleSubmit = async () =>{
        if(keyword){
            await callApi("GET",`serch/member/${keyword}`)
        .then((res)=>{
            showMessage({
                message : res.message,
                type : "success"
            })
            setMember(res.data)
        })
        .catch((err)=>{
            showMessage({
                message : "Member tidak ditemukan!",
                type : "danger"
            })
            console.log(err)
        })
        }else{
            showMessage({
                message : "Silahkan masukan keyword terlebih dahulu!",
                type : "warning"
            })
        }
    }

    useEffect(()=>{
        callApi("GET","member")
        .then((res)=>{
            setMember(res.data)
            console.log(res.data[0].full_name)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <View style={styles.page}>
            <Headers title="Members" onPress={()=>{navigation.goBack()}}/>
            <View style={{paddingHorizontal: 15}}>
            <Gap height={15}/>
            <View style={{justifyContent: 'space-between'}}>
                <Input label="Cari Member" value={keyword} onChangeText={(value)=>{setKeyword(value)}}/>
                <Gap height={10}/>
                <Btn onPress={handleSubmit} label="Search"/>
            </View>
            <Gap height={20}/>
            <Text>Data Member :</Text>
            <Gap height={10}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                {
                    member.map((e,i)=>{
                        return <ListItem 
                        key={i} 
                        full_name={e.full_name}
                        uniq={e.uniqid_member}
                        nopol={e.nopol}
                        nra={e.nra}
                        email={e.email}
                        phone={e.phone}
                        alamat={e.alamat}
                        varian={e.varian}
                        warna={e.warna} 
                        />
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Member;

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: 'white'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})
