import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS } from '../../Utils/Config'
import AuthHeader from '../../components/headers/AuthHeader'
import GeneralText from '../../components/text/GeneralText'
import { heightPixel, pixelSizeVertical } from '../../Utils/Responsiveness'


const ContactUs = () => {
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled"
      style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <AuthHeader isLeftIcon={true} text={"ContactUs"} />
      <GeneralText text={"Contact Here"}
                fontWeight={700}
                font={17}
                lineHeight={heightPixel(24)}
                extraStyle={styles.extra} />
    </KeyboardAwareScrollView>
  )
}

export default ContactUs

const styles = StyleSheet.create({
    extra: {
        width: "90%",
        alignSelf: "center",
        marginTop: pixelSizeVertical(30),
        marginBottom: heightPixel(15)
    }
})