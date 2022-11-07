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
const Addaddress = ({ navigation }) => {
    const [streetNo, setstreetNo] = useState('')
    const [country, setcountry] = useState('')
    const [PostalCode, setPostalCode] = useState('')
    const [towncity, settowncity] = useState('')
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader isLeftIcon={true} text={"Logo"} />
            <GeneralText text={"Now, add your address"}
                lineHeight={heightPixel(25)}
                fontWeight={400}
                font={16}
                extraStyle={{ marginTop: pixelSizeVertical(25), textAlign: "center" }} />
            <GeneralText text={"Add Address"}
                fontWeight={400}
                extraStyle={{ marginTop: pixelSizeVertical(15), textAlign: "center" }} />
            <View style={{ marginTop: heightPixel(15) }} />
            <PrimaryInput placeholder="Street No." onChange={setstreetNo} />
            <PrimaryInput placeholder="Town, City" onChange={settowncity} />
            <PrimaryInput placeholder={"Postal Code"} onChange={setPostalCode} />
            <PrimaryInput placeholder={"Country"} onChange={setcountry} />

            <View style={{ marginTop: pixelSizeVertical(30) }} />
            <SkipNow text={"Pin on Map"} navToScreen={() => navigation.navigate("MapPinlocation")} />

            <GradientPrimarybtn top={35}
                colorsArray={streetNo == '' || towncity == '' || PostalCode == '' || country == '' ? [COLORS.lightGray, COLORS.lightGray] : false}
                onPress={() => navigation.navigate("MapPinlocation")}
                text={"Continue"} />
            <SkipNow text={"Add Later"} navToScreen={() => navigation.navigate("YourFavCategories")} />
        </KeyboardAwareScrollView>
    )
}

export default Addaddress

const styles = StyleSheet.create({})