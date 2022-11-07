import { StyleSheet, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, fontFamily } from '../../Utils/Config'
import GeneralText from '../../components/text/GeneralText'
import { heightPixel, pixelSizeVertical, widthPixel } from '../../Utils/Responsiveness'
import GradientPrimarybtn from '../../components/buttons/GradientPrimarybtn'
import SkipNow from '../../components/buttons/SkipNow'
import AuthHeader from '../../components/headers/AuthHeader'
import PrimaryInput from '../../components/Resuseables/PrimaryInput'
import { ScrollView } from 'react-native-gesture-handler'
import OtpVerification from '../../components/Resuseables/OtpVerification'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const CodeConfirmation = ({ navigation }) => {
    const [otpValue, setotpValue] = useState('')
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled"
            style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader isLeftIcon={true} text={"Logo"} />
            <GeneralText text={"Enter the code we just sent to email"}
                lineHeight={heightPixel(25)}
                fontWeight={400}
                font={16}
                extraStyle={{ marginTop: pixelSizeVertical(25), textAlign: "center" }} />
            <GeneralText text={"Forgot Password"}
                fontWeight={400}
                extraStyle={{ marginTop: pixelSizeVertical(14), textAlign: "center" }} />
            <View style={{ marginTop: heightPixel(35) }} />
            <OtpVerification value={otpValue} setValue={setotpValue} />
            <View style={{ marginTop: heightPixel(330) }} />
            <SkipNow Color={COLORS.lightGray}
                text={"Change email address"} navToScreen={() => navigation.goBack()} />
            <GradientPrimarybtn top={28}
                colorsArray={otpValue == '' ? [COLORS.lightGray, COLORS.lightGray] : false}
                onPress={() => navigation.navigate("UpdatePassword")}
                text={"Continue"} />

        </KeyboardAwareScrollView>
    )
}

export default CodeConfirmation

const styles = StyleSheet.create({})