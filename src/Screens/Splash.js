import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../Utils/Config'
import GeneralText from '../components/text/GeneralText'

const Splash = () => {
    return (
        <SafeAreaView style={{ flexGrow: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.backgroundColor }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <GeneralText text={"Logo"} />
        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({})