import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Utils/Config'
import OnBoardingComponent from '../../components/Resuseables/OnBoardingComponent'
import { Dash, Dot } from '../../components/Resuseables/OnBoardDots'

const OnBoarding3 = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <OnBoardingComponent
                boardImage={require("../../assets/images/OnBoarding3.png")}
                quoteText={"Sell your handmade crafts\neasily"}
                Dot1={() => <Dot />}
                Dot2={() => <Dot />}
                Dot3={() => <Dash />}
                navToScreen={"GetStarted"}
                // is3rd={true}
            />

        </View>
    )
}

export default OnBoarding3

const styles = StyleSheet.create({})