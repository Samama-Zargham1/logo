import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../Utils/Responsiveness'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../Utils/Config'

export const Icon1 = () =>
    ({ focused, color, size, index }) =>
        <LinearGradient colors={!focused ? [COLORS.WHITE, COLORS.WHITE] : [COLORS.PRIMARY_Blue, COLORS.PRIMARY_Red]}
            style={[focused ? styles.gradient : {}]}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Image style={[styles.iconSize, { tintColor: focused ? "white" : COLORS.darkGray }]}
                resizeMode="contain"
                source={require("../../assets/images/Home.png")}
            />
        </LinearGradient>


export const Icon2 = () =>
    ({ focused, color, size, index }) =>
        <LinearGradient colors={!focused ? [COLORS.WHITE, COLORS.WHITE] : [COLORS.PRIMARY_Blue, COLORS.PRIMARY_Red]}
            style={[focused ? styles.gradient : {}]}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Image style={[styles.iconSize, { tintColor: focused ? "white" : COLORS.darkGray }]}
                resizeMode="contain"
                source={require("../../assets/images/Orders.png")}
            />
        </LinearGradient>


export const Icon3 = () =>
    ({ focused, color, size, index }) =>
        <LinearGradient colors={!focused ? [COLORS.WHITE, COLORS.WHITE] : [COLORS.PRIMARY_Blue, COLORS.PRIMARY_Red]}
            style={[focused ? styles.gradient : {}]}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Image style={[styles.iconSize, { tintColor: focused ? "white" : COLORS.darkGray }]}
                resizeMode="contain"
                source={require("../../assets/images/heart.png")}
            />
        </LinearGradient>


export const Icon4 = () =>
    ({ focused, color, size, index }) =>
        <LinearGradient colors={!focused ? [COLORS.WHITE, COLORS.WHITE] : [COLORS.PRIMARY_Blue, COLORS.PRIMARY_Red]}
            style={[focused ? styles.gradient : {}]}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Image style={[styles.iconSize, { tintColor: focused ? "white" : COLORS.darkGray }]}
                resizeMode="contain"
                source={require("../../assets/images/Cart.png")}
            />
        </LinearGradient>


export const Icon5 = () =>
    ({ focused, color, size, index }) =>
        <LinearGradient colors={!focused ? [COLORS.WHITE, COLORS.WHITE] : [COLORS.PRIMARY_Blue, COLORS.PRIMARY_Red]}
            style={[focused ? styles.gradient : {}]}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Image style={[styles.iconSize, { tintColor: focused ? "white" : COLORS.darkGray }]}
                resizeMode="contain"
                source={require("../../assets/images/Profile.png")}
            />
        </LinearGradient>

const styles = StyleSheet.create({
    iconSize: { width: widthPixel(23), height: heightPixel(23) },
    gradient: {
        width: widthPixel(42),
        height: heightPixel(42),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    }
})