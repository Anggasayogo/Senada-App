import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcAccount, IcDes, IcLanguage, IcNext, IcStar } from '../../../assets'
import { colors } from '../../../utils'

const List = ({profile,name,desc,onPress,icon,type}) => {
    const Icon = () => {
        if(icon === 'edit-profile'){
            return <Image source={IcAccount}/>
        }
        if(icon === 'language'){
            return <Image source={IcLanguage}/>
        }
        if(icon === 'rate'){
            return <Image source={IcStar}/>
        }
        if(icon === 'help'){
            return <Image source={IcDes}/>
        }

        return <Image source={IcAccount}/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon/> : <Image source={profile} style={styles.avatar}/> }
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type == 'next' && <Image source={IcNext}/>
            }
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {flexDirection: 'row',padding: 16, borderBottomWidth: 1, borderBottomColor: colors.border,alignItems: 'center',justifyContent: 'space-between'},
    avatar: {width: 46, height: 46, borderRadius: 46 /2},
    name: { fontSize: 16, color: colors.text.primary},
    desc: { fontSize: 12, color: colors.text.secondary },
    content : {flex: 1, marginLeft: 16},
})
