import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, fontFamily } from '../../Utils/Config'
import AuthHeader from '../../components/headers/AuthHeader'
import { heightPixel } from '../../Utils/Responsiveness'
import { DrawerList } from '../../Utils/StaticData'

const DrawerHome = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled"
            style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <AuthHeader isLeftIcon={true} isDrawerHome={true}
                text={"Logo"} />
            {
                DrawerList?.map((item, index) => {
                    var onPress = () =>
                        [item?.id == 8 ? console.log("LOgOut") :
                            item?.id < 4 ? navigation.navigate("TabNav", { screen: item?.screen })
                                : navigation.navigate(item?.screen)]

                    return (
                        <Text key={index}
                            style={[
                                styles.drawerList, {
                                    color: item.id < 8 ?
                                        COLORS.textColor : "red"
                                }]}
                            onPress={onPress}>
                            {item?.screen}
                        </Text >
                    )
                })
            }

        </KeyboardAwareScrollView >
    )
}

export default DrawerHome

const styles = StyleSheet.create({
    drawerList: {
        fontFamily: fontFamily[500],
        fontSize: 17,
        lineHeight: 24,
        textAlign: "center", flex: 1,
        marginTop: heightPixel(30)
    }
})