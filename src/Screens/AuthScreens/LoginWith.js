import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../Utils/Config'
import GeneralText from '../../components/text/GeneralText'
import { heightPixel, pixelSizeVertical, widthPixel } from '../../Utils/Responsiveness'
import GradientPrimarybtn from '../../components/buttons/GradientPrimarybtn'
import SkipNow from '../../components/buttons/SkipNow'
import AuthHeader from '../../components/headers/AuthHeader'
import SocialLoginBtn from '../../components/buttons/SocialLoginBtn'


const LoginWith = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader text={"Logo"} />
            <GeneralText text={"Welcome back, Login now"}
                lineHeight={heightPixel(25)}
                fontWeight={400}
                font={16}
                extraStyle={{ marginTop: pixelSizeVertical(30), textAlign: "center" }} />
            <GeneralText text={"Login"}
                fontWeight={400}
                extraStyle={{ marginTop: pixelSizeVertical(22), textAlign: "center" }} />
            <Image resizeMode="contain"
                style={styles.mainImage}
                source={require("../../assets/images/loginWith.png")} />
            <GradientPrimarybtn top={5}
                onPress={() => navigation.navigate("ChooseProfile")}
                text={"Login with Email"} />
            <SkipNow Color={COLORS.lightGray} text={"Or sign in with"} navToScreen={false} />
            <View style={{ marginTop: pixelSizeVertical(30) }} />
            <View style={styles.sociallogins}>
                <SocialLoginBtn icon={require("../../assets/images/Googlelogin.png")} navToScreen="" />
                <SocialLoginBtn icon={require("../../assets/images/Facebooklogin.png")} navToScreen="" />
                <SocialLoginBtn icon={require("../../assets/images/Applelogin.png")} navToScreen="" />

            </View>
            {/* <SkipNow Color={COLORS.lightGray} text={"New to Sauce?"} navToScreen={false} />
            <SkipNow text={"Signup"} navToScreen={() => navigation.navigate("ChooseProfile")} /> */}


        </View>
    )
}

export default LoginWith

const styles = StyleSheet.create({
    mainImage: {
        width: widthPixel(284),
        height: heightPixel(284),
        alignSelf: "center",
        marginVertical: pixelSizeVertical(35)
    },
    sociallogins: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: widthPixel(285)
    }
})