import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import GeneralText from '../text/GeneralText'
import { heightPixel, pixelSizeVertical, widthPixel } from '../../Utils/Responsiveness'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const AuthHeader = ({ text, isLeftIcon, OneLine, isDrawer, isDrawerHome }) => {
    let navigation = useNavigation();
    let backIcon = require("../../assets/images/BackIcon.png")
    let drawerIcon = require("../../assets/images/DrawerIcon.png")
    let CrossIcon = require("../../assets/images/CrossIcon.png")
    let LEFTICON = isDrawer ? drawerIcon : isDrawerHome ? CrossIcon : backIcon
    return (
        <View style={[
            isLeftIcon == true &&
            { flexDirection: "row", alignItems: "center", flex: 1 }
        ]}>
            {isLeftIcon == true &&
                <TouchableOpacity onPress={() => isDrawer ? navigation.navigate("DrawerNav") : navigation.goBack()}
                    containerStyle={{
                        flex: 0.2, left: widthPixel(15),
                        marginTop: pixelSizeVertical(20)
                    }}
                    activeOpacity={0.7}>
                    <Image
                        resizeMode="contain"
                        style={{ width: widthPixel(24), height: heightPixel(24) }}
                        source={LEFTICON}
                    />
                </TouchableOpacity>

            }
            <View style={[isLeftIcon == true && { flex: 0.6 }]}>
                <GeneralText text={text} fontWeight={500} OneLine={OneLine}
                    lineHeight={heightPixel(25)}
                    extraStyle={{ textAlign: "center", marginTop: pixelSizeVertical(20), }} />
            </View>

        </View>
    )
}

export default AuthHeader

const styles = StyleSheet.create({})