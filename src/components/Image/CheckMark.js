import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { heightPixel, pixelSizeVertical, widthPixel } from '../../Utils/Responsiveness'

const CheckMark = () => {
    return (
        <Image
            resizeMode="contain"
            style={{
                width: widthPixel(84), height: heightPixel(84),
                alignSelf: 'center', marginTop: pixelSizeVertical(35), marginBottom: pixelSizeVertical(20)
            }}
            source={require("../../assets/images/CheckMark.png")} />
    )
}

export default CheckMark

const styles = StyleSheet.create({})