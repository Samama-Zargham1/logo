import { Text } from 'react-native'
import React from 'react'
import { COLORS, fontFamily } from '../../Utils/Config'
import { fontPixel, heightPixel } from '../../Utils/Responsiveness'

const GeneralText = ({ text, Color, font, OneLine, fontWeight, extraStyle, lineHeight }) => {
    return (
        <Text numberOfLines={OneLine ? 1 : 5} style={
            [{
                fontFamily: fontFamily[fontWeight ? fontWeight : 600],
                fontSize: font ? font : fontPixel(24),
                color: Color ? Color : COLORS.textColor, lineHeight: lineHeight ? lineHeight : 36
            }, extraStyle && extraStyle]
        }>{text}</Text>
    )
}

export default GeneralText