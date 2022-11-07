import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding1 from '../Screens/OnBoarding/OnBoarding1';
import OnBoarding2 from '../Screens/OnBoarding/OnBoarding2';
import OnBoarding3 from '../Screens/OnBoarding/OnBoarding3';
import GetStarted from '../Screens/OnBoarding/GetStarted';
import AuthStack from './AuthStack';
import TabNav from './TabNav/TabNav';
import UserStack from './UserStack';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      animation: "fade", presentation: "card", animationTypeForReplace: "push"
    }} >

      <Stack.Screen name='UserStack' component={UserStack} />
      <Stack.Screen name='OnBoarding1' component={OnBoarding1} />
      <Stack.Screen name='OnBoarding2' component={OnBoarding2} />
      <Stack.Screen name='OnBoarding3' component={OnBoarding3} />
      <Stack.Screen name='GetStarted' component={GetStarted} />
      <Stack.Screen name='AuthStack' component={AuthStack} />


    </Stack.Navigator>
  )
}
export default OnboardingStack