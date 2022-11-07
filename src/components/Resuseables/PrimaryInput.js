import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../Utils/Config'
import { heightPixel, widthPixel } from '../../Utils/Responsiveness'

const PrimaryInput = ({ onChange, placeholder }) => {
    return (
        <View style={styles.Input}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChange}
            />
        </View>
    )
}

export default PrimaryInput

const styles = StyleSheet.create({
    Input: {
        borderWidth: 1,
        width: widthPixel(325),
        borderRadius: 100,
        borderColor: COLORS.textColor,
        paddingLeft: 15,
        alignSelf: "center",
        height: heightPixel(50),
        marginTop: heightPixel(24)
    }
})