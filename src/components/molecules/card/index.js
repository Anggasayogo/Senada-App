import React from 'react'
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import { DumyCard, IcLove } from '../../../assets/';

const CustomCard = ({title,description,created_at,gambar}) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={{uri : gambar}} imageStyle={{borderRadius: 5}} style={styles.container}>
                <Image source={IcLove} style={{width: 15,height: 13}}/>
            </ImageBackground>
            <View style={{justifyContent: 'flex-start'}}>
                <Text style={{fontSize: 17,fontWeight: 'bold',paddingLeft: 10,paddingTop: 10,maxWidth: 250}}>{title}</Text>
                <Text style={{fontSize: 15,fontWeight: 'bold',paddingLeft: 10,paddingTop: 10,maxWidth: 250}}>{description}</Text>
            </View>
            <View style={{ flex: 1,flexDirection: 'row'}}>
                <Text style={{fontSize: 12,color: '#7B7F9E',paddingTop: 5,paddingLeft: 10,marginBottom: 10}}>{created_at}</Text>
            </View>
        </View>
    )
}

export default CustomCard;

const styles = StyleSheet.create({
    page:{
        backgroundColor: 'rgba(230, 229, 242, 0.811762)',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 5
    },
    container:{
        width: 265,
        height: 160,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
    }
})
