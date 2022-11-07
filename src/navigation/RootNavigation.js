import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import OnboardingStack from './OnboardingStack';

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                    <RootStack />
            </SafeAreaView>
        </NavigationContainer>
    )
}
const RootStack = () => {
    return <OnboardingStack />;
};
export default RootNavigation

