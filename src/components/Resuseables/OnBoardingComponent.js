import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import AuthHeader from '../headers/AuthHeader'
import { useNavigation } from '@react-navigation/native'
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../Utils/Responsiveness'
import GeneralText from '../text/GeneralText'
import SkipNow from '../buttons/SkipNow'
import GradientPrimarybtn from '../buttons/GradientPrimarybtn'

const OnBoardingComponent = ({ boardImage, is3rd, quoteText, Dot1, Dot2, Dot3, navToScreen }) => {
    const navigation = useNavigation();

    return (
        <View style={{ alignItems: "center" }}>
            <AuthHeader text={"Logo"} />
            <Image resizeMode="contain"
                style={styles.mainImage}
                source={boardImage} />
            <GeneralText text={quoteText}
                fontWeight={400}
                lineHeight={heightPixel(32)}
                extraStyle={{ marginTop: pixelSizeVertical(58), textAlign: "center" }} />
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: pixelSizeVertical(68) }}>
                <Dot1 />
                <Dot2 />
                <Dot3 />
            </View>
            <GradientPrimarybtn top={50} onPress={() => navigation.navigate(navToScreen)} text={is3rd != true ? "Continue" : "GetStarted"} />
            {is3rd != true && <SkipNow text={"Skip for now"} navToScreen={() => navigation.navigate("AuthStack")}/>}

        </View>
    )
}

export default OnBoardingComponent

const styles = StyleSheet.create({
    mainImage: {
        width: widthPixel(284),
        height: heightPixel(284),
        marginTop: pixelSizeVertical(64)
    }
})