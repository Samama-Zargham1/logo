import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { widthPixel, heightPixel } from '../../Utils/Responsiveness';
import { COLORS } from '../../Utils/Config';
import {  IOSAndroid } from '../../Utils/AppStyles';

const styles = StyleSheet.create({
    root: { width: "70%", alignSelf: "center" },
    cell: {
        width: widthPixel(45),
        height: heightPixel(45),
        borderRadius: 5,
        backgroundColor: COLORS.WHITE,
        justifyContent: "center",
        ...IOSAndroid.elevation5,
    },
    cellText: {
        color: COLORS.textColor,
        lineHeight: heightPixel(25),
        fontSize: 20,
        textAlign: 'center',
    }
});

const CELL_COUNT = 4;

const OtpVerification = ({ value, setValue, isPin }) => {
    const [enableMask, setEnableMask] = useState(isPin == true ? true : false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

    const toggleMask = () => setEnableMask((f) => !f);

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={(e) => setValue(e)}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => {
                    if (index == 0) isFocused = true
                    let text = null;

                    if (symbol) {
                        text = enableMask ? '•' : symbol;
                    } else if (isFocused) {
                        text = <Cursor />;
                    }

                    return (
                        <View key={index} style={styles.cell}>
                            <Text
                                style={[styles.cellText, isFocused && styles.focusCell, isPin == true && { elevation: 5 }]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {text || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>

                    )
                }}
            />
            {/* <Text style={styles.toggle} onPress={toggleMask}>
                {enableMask ? '🙈' : '🐵'}
            </Text> */}
        </SafeAreaView>
    );
};

export default OtpVerification;