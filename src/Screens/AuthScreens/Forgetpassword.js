import { StyleSheet, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, fontFamily } from '../../Utils/Config'
import GeneralText from '../../components/text/GeneralText'
import { heightPixel, pixelSizeVertical, widthPixel } from '../../Utils/Responsiveness'
import GradientPrimarybtn from '../../components/buttons/GradientPrimarybtn'
import SkipNow from '../../components/buttons/SkipNow'
import AuthHeader from '../../components/headers/AuthHeader'
import PrimaryInput from '../../components/Resuseables/PrimaryInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Forgetpassword = ({ navigation }) => {
    const [email, setemail] = useState('')

    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader isLeftIcon={true} text={"Logo"} />
            <GeneralText text={"Enter email associated with your account"}
                lineHeight={heightPixel(25)}
                fontWeight={400}
                font={16}
                extraStyle={{ marginTop: pixelSizeVertical(25), textAlign: "center" }} />
            <GeneralText text={"Forgot Password"}
                fontWeight={400}
                extraStyle={{ marginTop: pixelSizeVertical(14), textAlign: "center" }} />
            <View style={{ marginTop: heightPixel(10) }} />
            <PrimaryInput placeholder="Email Address" onChange={setemail} />
            <View style={{ marginTop: heightPixel(370) }} />

            <GradientPrimarybtn top={28}
                colorsArray={email == '' ? [COLORS.lightGray, COLORS.lightGray] : false}
                onPress={() => navigation.navigate("CodeConfirmation")}
                text={"Continue"} />
        </KeyboardAwareScrollView>
    )
}


export default Forgetpassword

const styles = StyleSheet.create({})