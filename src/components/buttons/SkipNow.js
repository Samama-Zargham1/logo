import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, fontFamily } from '../../Utils/Config'
import { fontPixel, pixelSizeVertical } from '../../Utils/Responsiveness'
import { useNavigation } from '@react-navigation/native'

const SkipNow = ({ text, navToScreen, Color }) => {
    const navigation = useNavigation();

    return (
        //onpress per stack bhi change kerna onBoard ok 
        <TouchableOpacity
            style={{ marginTop: pixelSizeVertical(29), }}
            activeOpacity={0.9} onPress={() =>
                navToScreen == false ? console.log("not navigation button")
                    : navToScreen()}>
            <Text style={
                {
                    fontFamily: fontFamily[400],
                    fontSize: fontPixel(14.2),
                    color: Color ? Color : COLORS.textColor,
                    lineHeight: 18, textAlign: "center"
                }
            }>{text}</Text>
        </TouchableOpacity>
    )
}

export default SkipNow

