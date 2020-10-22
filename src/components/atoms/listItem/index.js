import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = ({uniq,nopol,nra,full_name,alias,email,phone,alamat,varian,warna}) => {
    return (
        <View>
            <View style={{ borderColor: 'black',borderWidth: 0.5,color: 'black'}}></View>
            <Text style={styles.data}>ID Member : {uniq}</Text>
            <Text style={styles.data}>Nopol : {nopol}</Text>
            <Text style={styles.data}>NRA : {nra}</Text>
            <Text style={styles.data}>Nama  : {full_name}</Text>
            <Text style={styles.data}>Nama/alias : {alias}</Text>
            <Text style={styles.data}>Email : {email}</Text>
            <Text style={styles.data}>Phone : {phone}</Text>
            <Text style={styles.data}>Alamat: {alamat}</Text>
            <Text style={styles.data}>Varian : {varian}</Text>
            <Text style={styles.data}>Warna : {warna}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    data:{
        fontSize: 15,
        fontWeight: 'bold'
    },
})
