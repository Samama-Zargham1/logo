import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Utils/Config'
import OnBoardingComponent from '../../components/Resuseables/OnBoardingComponent'
import { Dash, Dot } from '../../components/Resuseables/OnBoardDots'

const OnBoarding2 = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <OnBoardingComponent
                boardImage={require("../../assets/images/OnBoarding2.png")}
                quoteText={"Buy your beautiful crafts\neasily"}
                Dot1={() => <Dot />}
                Dot2={() => <Dash />}
                Dot3={() => <Dot />}
                navToScreen={"OnBoarding3"}
            />

        </View>
    )
}

export default OnBoarding2

const styles = StyleSheet.create({})