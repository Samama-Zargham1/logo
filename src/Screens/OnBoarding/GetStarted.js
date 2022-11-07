import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Utils/Config'
import CheckMark from '../../components/Image/CheckMark'
import GeneralText from '../../components/text/GeneralText'
import { heightPixel, pixelSizeVertical } from '../../Utils/Responsiveness'
import GradientPrimarybtn from '../../components/buttons/GradientPrimarybtn'
import SkipNow from '../../components/buttons/SkipNow'

const GetStarted = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <CheckMark />
      <GeneralText text={"Let’s Explore what the\ncreative people sharing"}
        lineHeight={heightPixel(32)}
        fontWeight={400}
        extraStyle={{ marginTop: pixelSizeVertical(2), textAlign: "center" }} />
      <View style={{ marginTop: pixelSizeVertical(292) }} />
      <SkipNow Color={COLORS.lightGray} text={"Already have an account?"} navToScreen="" />
      <SkipNow text={"Login"} navToScreen="" />
      <GradientPrimarybtn top={30} onPress={() => navigation.navigate("AuthStack")} text={"Get Started"} />
      <SkipNow text={"Become Seller"} navToScreen="" />

    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({})