import { StyleSheet, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, fontFamily } from '../../Utils/Config'
import GeneralText from '../../components/text/GeneralText'
import { heightPixel, pixelSizeVertical, widthPixel } from '../../Utils/Responsiveness'
import GradientPrimarybtn from '../../components/buttons/GradientPrimarybtn'
import SkipNow from '../../components/buttons/SkipNow'
import AuthHeader from '../../components/headers/AuthHeader'
import SocialLoginBtn from '../../components/buttons/SocialLoginBtn'
import Box from '../../components/Resuseables/box';

const ChooseProfile = ({ navigation }) => {
    const [selected, setSelected] = useState("Buyer");

    const handleSelected = value => {
        setSelected(value);
        navigation.navigate('Login', { profileType: value });
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader text={"Logo"} />
            <GeneralText text={"Choose Profile Type"}
                lineHeight={heightPixel(20)}
                fontWeight={400}
                font={16}
                extraStyle={styles.extrraChoose} />
            <GeneralText text={"What Type of profile you want to make in Logo"}
                lineHeight={heightPixel(22)}
                fontWeight={400}
                font={16}
                extraStyle={{ marginTop: pixelSizeVertical(10), alignSelf:"center"}} />
            <View
                style={styles.options}>
                <Box text="Buyer" onPress={handleSelected} value={selected} />
                <Box text="Seller" onPress={handleSelected} value={selected} />
            </View>
        </View>
    )
}

export default ChooseProfile

const styles = StyleSheet.create({
    extrraChoose: {
        marginTop: pixelSizeVertical(45),
        textAlign: "center",
        fontFamily: fontFamily[700],
        width: "55%", alignSelf:"flex-start"
    },
    options:{
        width: "90%",
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: pixelSizeVertical(60)
    }
})

