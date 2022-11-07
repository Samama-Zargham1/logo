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

const UpdatePassword = ({ navigation }) => {
  const [newPassword, setnewPassword] = useState('')
  const [confirmNewPassword, setconfirmNewPassword] = useState('')
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <AuthHeader isLeftIcon={true} text={"Logo"} />
      <GeneralText text={"Enter the new password"}
        lineHeight={heightPixel(25)}
        fontWeight={400}
        font={16}
        extraStyle={{ marginTop: pixelSizeVertical(25), textAlign: "center" }} />
      <GeneralText text={"Update Password"}
        fontWeight={400}
        extraStyle={{ marginTop: pixelSizeVertical(14), textAlign: "center" }} />
      <PrimaryInput placeholder="New Password" onChange={setnewPassword} />
      <PrimaryInput placeholder="Confirm New Password" onChange={setconfirmNewPassword} />

      <GradientPrimarybtn top={28}
        colorsArray={newPassword == '' || confirmNewPassword == '' ? [COLORS.lightGray, COLORS.lightGray] : false}
        // onPress={() => navigation.navigate("UpdatePassword")}
        text={"Update Password"} />

    </KeyboardAwareScrollView>
  )
}

export default UpdatePassword

const styles = StyleSheet.create({})