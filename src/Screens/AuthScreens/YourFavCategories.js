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
import Bubble from '../../components/buttons/Bubble'
import { AllFavCategories } from '../../Utils/StaticData'
import { changeFlag } from '../../Utils/Common'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const YourFavCategories = ({ navigation }) => {
    const [AllFavCategorie, setAllFavCategorie] = useState(AllFavCategories)
    let selectedCategories = []

    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader isLeftIcon={true} text={"Logo"} />
            <GeneralText text={"Choose your Favourites categories to help\nyou better!"}
                lineHeight={heightPixel(25)}
                fontWeight={400}
                font={16}
                extraStyle={{ marginTop: pixelSizeVertical(25), textAlign: "center" }} />
            <SkipNow Color={COLORS.lightGray} text={"You can choose more than one"} navToScreen={false} />
            <View style={{ flexDirection: "row", flexWrap: "wrap", width: "90%", alignSelf: "center" }}>
                {
                    AllFavCategorie?.map((item, index) => {
                        return <View key={index}>
                            <Bubble
                                text={item?.option}
                                isSelect={item?.isSelect}
                                top={20}
                                onPress={() => changeFlag(AllFavCategorie, item, index, setAllFavCategorie, selectedCategories)}
                            />
                        </View>
                    })
                }
            </View>
            <GradientPrimarybtn top={220}
                colorsArray={AllFavCategorie.find(item => item?.isSelect == true) == undefined ? [COLORS.lightGray, COLORS.lightGray] : false}
                onPress={() => navigation.navigate("Login")}
                text={"Continue"} />
        </KeyboardAwareScrollView>
    )
}

export default YourFavCategories

const styles = StyleSheet.create({})