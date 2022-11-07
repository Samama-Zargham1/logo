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
import SocialLoginBtn from '../../components/buttons/SocialLoginBtn'

const SignUp = ({ navigation }) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <AuthHeader isLeftIcon={true} text={"Logo"} />
      <GeneralText text={"Welcome , Signup now"}
        lineHeight={heightPixel(25)}
        fontWeight={400}
        font={16}
        extraStyle={{ marginTop: pixelSizeVertical(25), textAlign: "center" }} />
      <GeneralText text={"Sign up"}
        fontWeight={400}
        extraStyle={{ marginTop: pixelSizeVertical(15), textAlign: "center" }} />
      <View style={{ marginTop: heightPixel(15) }} />
      <PrimaryInput placeholder="Name" onChange={setname} />
      <PrimaryInput placeholder="Email Address" onChange={setemail} />
      <PrimaryInput placeholder={"Password"} onChange={setpassword} />
      <View style={{ marginTop: heightPixel(20) }} />
      <SkipNow Color={COLORS.lightGray} text={"Or continue with"} navToScreen={false} />
      <View style={{ marginTop: pixelSizeVertical(30) }} />
      <View style={styles.sociallogins}>
        <SocialLoginBtn icon={require("../../assets/images/Googlelogin.png")} navToScreen="" />
        <SocialLoginBtn icon={require("../../assets/images/Facebooklogin.png")} navToScreen="" />
        <SocialLoginBtn icon={require("../../assets/images/Applelogin.png")} navToScreen="" />
      </View>
      <GradientPrimarybtn top={35}
        colorsArray={password == '' || email == '' || name == '' ? [COLORS.lightGray, COLORS.lightGray] : false}
        onPress={() => navigation.navigate("Addaddress")}
        text={"Sign up"} />
      <SkipNow Color={COLORS.lightGray} text={"Have an account?"} navToScreen={false} />
      <SkipNow text={"Login"} navToScreen={() => navigation.navigate("Login")} />
    </KeyboardAwareScrollView>
  )
}


export default SignUp


const styles = StyleSheet.create({
  sociallogins: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: widthPixel(285)
  }
})