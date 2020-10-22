import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IcBack } from '../../../assets'

const Headers = ({height,onPress,title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container(height)}>
            <Image source={IcBack}/>
            <Text style={{flex: 1,textAlign: 'center',marginLeft: -20,color: 'white',fontSize: 16,}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Headers

const styles = StyleSheet.create({
    container:(height)=>({
        height: height, 
        backgroundColor: '#6C63FF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15
    })
})
