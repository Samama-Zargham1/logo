import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../Utils/Responsiveness'
import { COLORS } from '../../Utils/Config'

const SocialLoginBtn = ({ icon, navToScreen }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={
            {
                borderWidth: 1, width: widthPixel(75), height: heightPixel(42), borderRadius:100, justifyContent:"center",alignItems:"center", borderColor:COLORS.lightGray
            }
        }>
            <Image resizeMode="contain" style={{ width: widthPixel(20), height: heightPixel(20) }} source={icon} />
        </TouchableOpacity>
    )
}

export default SocialLoginBtn

const styles = StyleSheet.create({})