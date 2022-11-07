import { Button, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../Utils/Config';
import { heightPixel, widthPixel, pixelSizeVertical } from '../../Utils/Responsiveness';
import GeneralText from '../text/GeneralText';

const GradientPrimarybtn = ({ onPress, text, top, colorsArray }) => {
    
    return (
        <TouchableOpacity
            style={{ marginTop: pixelSizeVertical(top), alignSelf: "center" }}
            activeOpacity={0.7}
            onPress={onPress}
            // disabled={colorsArray ? true : false}
        >
            <LinearGradient colors={colorsArray ? colorsArray : [COLORS.PRIMARY_Blue, COLORS.PRIMARY_Red]}
                style={
                    {
                        width: widthPixel(325),
                        height: heightPixel(55),
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }
                start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
                <GeneralText text={text}
                    fontWeight={500}
                    Color={COLORS.WHITE}
                    font={18}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientPrimarybtn