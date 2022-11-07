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

const Login = ({ navigation, route }) => {
    // const { profileType } = route?.params
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    // console.log(profileType)
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader isLeftIcon={true} text={"Logo"} />
            <GeneralText text={"Welcome back, Login now"}
                lineHeight={heightPixel(25)}
                fontWeight={400}
                font={16}
                extraStyle={{ marginTop: pixelSizeVertical(25), textAlign: "center" }} />
            <GeneralText text={"Login"}
                fontWeight={400}
                extraStyle={{ marginTop: pixelSizeVertical(14), textAlign: "center" }} />
            <View style={{ marginTop: heightPixel(15) }} />
            <PrimaryInput placeholder="Email Address " onChange={setemail} />
            <PrimaryInput placeholder={"Password"} onChange={setpassword} />
            <Text onPress={() => navigation.navigate("Forgetpassword")} style={styles.extrraChoose}>Forgot Password?</Text>
            <View style={{ marginTop: heightPixel(180) }} />
            <SkipNow Color={COLORS.lightGray} text={"New to Sauce?"} navToScreen={false} />
            <SkipNow text={"Signup"} navToScreen={() => navigation.navigate("SignUp")} />
            <GradientPrimarybtn top={28}
                colorsArray={password == '' || email == '' ? [COLORS.lightGray, COLORS.lightGray] : false}
                onPress={() => navigation.navigate("UserStack")}
                text={"Login Now"} />
        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    extrraChoose: {
        width: "42%",
        alignSelf: "flex-end",
        fontSize: 14,
        color: COLORS.lightGray,
        fontFamily: fontFamily[400],
        marginTop: heightPixel(10),
        lineHeight: 25
    },
})