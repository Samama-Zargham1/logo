import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Utils/Config'
import OnBoardingComponent from '../../components/Resuseables/OnBoardingComponent'
import { Dash, Dot, dot } from '../../components/Resuseables/OnBoardDots'

const OnBoarding1 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <OnBoardingComponent
                boardImage={require("../../assets/images/OnBoarding1.png")}
                quoteText="Connect with the world and start your journey"
                Dot1={() => <Dash />}
                Dot2={() => <Dot />}
                Dot3={() => <Dot />}
                navToScreen={"OnBoarding2"}
            />

        </View>
    )
}

export default OnBoarding1

const styles = StyleSheet.create({})