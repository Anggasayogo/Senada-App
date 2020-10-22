import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect, useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { IcBel, IcCrm, IcDonasi, IcKopdar, Icmember, IcOprek, IcPengumuman, IcUser } from '../../assets'
import { CustomCard, Gap } from '../../components'
import { callApi } from '../../config'

const Dashboard = ({navigation}) => {
    const [nama,setNama] = useState('');
    const [berita,setBerita] = useState([])

    useEffect(()=>{
        const _validasisession = async ()=>{
            const isLogin = await AsyncStorage.getItem('api_token')
            const username = await AsyncStorage.getItem('name')
            if(!isLogin){
                navigation.replace("Login")
            }
            callApi("GET","pengumuman")
            .then((res)=>{
                setBerita(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })

            setNama(username);
        }
        _validasisession();
    },[])
    return (
        <>
        <StatusBar hidden = {false} backgroundColor = "#6C63FF"/>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
            <View style={styles.containerTop}>
                <View style={styles.containerWrapper}>
                    <View>
                        <Gap height={20}/>
                        <Image source={IcUser} style={styles.IcProfile}/>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}} style={styles.childTopContainerWrapper}>
                        <Gap height={30}/>
                        <Text style={styles.name}>{nama}</Text>
                        <Text style={styles.sapaan}>Welcome Back!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.childBottomContainerWrapper}>
                    <Image source={IcBel} style={styles.icHumber}/>
                </View>
            </View>
            <View style={styles.containerCenter}>
                <View style={styles.childContainerCenterTop}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Member')} style={styles.card}>
                        <Image source={Icmember} style={styles.imgMenu}/>
                        <Gap height={2}/>
                        <Text style={styles.titleMenu}>Member</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Oprek')} style={styles.card}>
                        <Image source={IcOprek} style={styles.imgMenu}/>
                        <Gap height={2}/>
                        <Text style={styles.titleMenu}>Oprek</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Kopdar')} style={styles.card}>
                        <Image source={IcKopdar} style={styles.imgMenu}/>
                        <Gap height={2}/>
                        <Text style={styles.titleMenu}>Kopdar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.childContainerCenterBottom}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Donasi')} style={styles.card}>
                        <Image source={IcDonasi} style={styles.imgMenu}/>
                        <Gap height={2}/>
                        <Text style={styles.titleMenu}>Donasi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Crm')} style={styles.card}>
                        <Image source={IcCrm} style={styles.imgMenu}/>
                        <Gap height={2}/>
                        <Text style={styles.titleMenu}>CRM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Pengumuman')} style={styles.card}>
                        <Image source={IcPengumuman} style={styles.imgMenu}/>
                        <Gap height={2}/>
                        <Text style={styles.titleMenu}>Pengumuman</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.containerBotoom}>
                <Text style={styles.titlePenawaran}>Penawaran</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        berita.map((e,i)=>{
                            return <CustomCard key={i} gambar={e.gambar} title={e.title} description={e.description} created_at={e.post_by} />
                        })
                    }
                </ScrollView>
            </View>
        </ScrollView>
        </>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    name:{fontSize: 17,fontWeight: 'bold',color: 'white'},
    sapaan:{fontSize: 12,color: '#7B7F9E',color: 'white'},
    imgMenu:{height: 40, width: 40},
    page:{
        flex: 1,
    },
    containerTop:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#6C63FF',
        paddingHorizontal: 10
    },
    titlePenawaran:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 12
    },
    containerWrapper:{width: 100,height: 100,flex: 1,flexDirection: 'row'},
    IcProfile:{width: 60,height: 60,},
    childTopContainerWrapper:{paddingLeft: 20},
    childBottomContainerWrapper:{width: 120,height: 100,justifyContent: 'center',alignItems: 'flex-end',paddingRight: 10},
    icHumber: {width: 25,height: 25},
    containerCenter:{
        flex: 1,
        backgroundColor: '#6C63FF',
        paddingHorizontal: 10,
        paddingBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    childContainerCenterTop:{flex: 1,flexDirection: 'row',justifyContent: 'space-between',paddingTop: 20},
    childContainerCenterBottom: {flex: 1,flexDirection: 'row',justifyContent: 'space-between',marginVertical: 20},
    card: {
        width: 88,
        height: 80,
        borderColor: 'rgba(230, 229, 242, 0.811762)',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(230, 229, 242, 0.811762)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    titleMenu:{
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'arial',
        color: 'black'
    },
    containerBotoom:{
        flex: 1,
        paddingHorizontal: 10
    }
})
