import React from 'react';
import { StyleSheet, Text,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Btn = ({label,onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Btn;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#6C63FF',
    },
    text:{
        fontSize: 18,
        textAlign: 'center',
        color: "white",
    }
})
