import { Button, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../Utils/Config';
import { heightPixel, widthPixel, pixelSizeVertical } from '../../Utils/Responsiveness';
import GeneralText from '../text/GeneralText';

const Bubble = ({ onPress, text, top, isSelect }) => {
    return (
        <TouchableOpacity
            style={{ marginTop: pixelSizeVertical(top) }}
            activeOpacity={0.7}
            onPress={onPress}
        // disabled={colorsArray ? true : false}
        >
            <LinearGradient colors={!isSelect ? [COLORS.lightGray, COLORS.lightGray] : [COLORS.PRIMARY_Blue, COLORS.PRIMARY_Red]}
                style={
                    {
                        marginRight: widthPixel(10),
                        paddingHorizontal: widthPixel(21),
                        paddingVertical: heightPixel(2.5),
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }
                start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
                <GeneralText text={text}
                    fontWeight={400}
                    Color={COLORS.WHITE}
                    font={18}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Bubble

