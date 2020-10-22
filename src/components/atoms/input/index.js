import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { onChange } from 'react-native-reanimated'
import { colors } from '../../../utils'

const Input = ({label,onChangeText,secureTextEntry}) => {
    const [border,setBorder] = useState(colors.border)
    const handleBorder = ()=>{
        setBorder(colors.text.secondary)
    }
    const handleBorderBlur = ()=>{
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
            secureTextEntry={secureTextEntry} 
            onFocus={handleBorder} 
            onBlur={handleBorderBlur} 
            onChangeText={onChangeText} 
            style={styles.input(border)}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:(border)=>(
        {
            height: 40,
            borderColor: border,
            borderWidth: 1 ,
            borderRadius: 20,
            paddingHorizontal: 15
        }
    ),
    label: {
        fontSize: 16,
        color: "black",
        marginBottom: 6,
        paddingHorizontal: 12
    }
})
