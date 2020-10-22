import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slider from 'react-native-hook-image-slider'
import { Gap } from '../../atoms'

const Carousel = () => {
    return (
        <View>
            <Gap height={15}/>
            <Slider imageHeight={200} loadingIndicatorColour="#6C63FF" activeDotColor="#6C63FF" images={[
            "http://firebase-kanvas.imgix.net/web_homebanner/homebanner/september/bisasembuhaska.jpg",
            "http://firebase-kanvas.imgix.net/web_homebanner/homebanner/september/conancrystalsembuh.jpg",
            "http://firebase-kanvas.imgix.net/web_homebanner/homebanner/september/DR15Sept.jpg",
            ]}/>
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({})
