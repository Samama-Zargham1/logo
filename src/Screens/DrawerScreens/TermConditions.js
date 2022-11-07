import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, fontFamily } from '../../Utils/Config'
import AuthHeader from '../../components/headers/AuthHeader'
import { p1, p2, p3, Terms } from '../../Utils/StaticData'
import GeneralText from '../../components/text/GeneralText'
import { heightPixel, pixelSizeVertical } from '../../Utils/Responsiveness'


const TermConditions = () => {
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled"
            style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader isLeftIcon={true} text={"Privacy Policy"} />
            <GeneralText text={"Terms and Conditions of Sauce"}
                fontWeight={700}
                font={17}
                lineHeight={heightPixel(24)}
                extraStyle={styles.extra} />
            <Text style={styles.para}>{p1}</Text>
            <Text style={styles.para}></Text>

            <Text style={styles.para}>{p2}</Text>
            <Text style={styles.para}></Text>

            <Text style={styles.para}>{p3}</Text>
            <Text style={styles.para}></Text>
            <Text style={styles.para}>{Terms}</Text>

        </KeyboardAwareScrollView >
    )
}


const styles = StyleSheet.create({
    para: {
        alignSelf: "center",
        fontFamily: fontFamily[400],
        color: COLORS.whiteColor,
        width: "90%",
        fontSize: 14
    },
    extra: {
        width: "90%",
        alignSelf: "center",
        marginTop: pixelSizeVertical(30),
        marginBottom: heightPixel(15)
    }
})

export default TermConditions

