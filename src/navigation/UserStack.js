import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNav from './DrawerNav';
import TabStack from './TabNav/TabStack';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      animation: "fade", presentation: "card", animationTypeForReplace: "push"
    }} >

      <Stack.Screen name='TabStack' component={TabStack} />
      <Stack.Screen name='DrawerNav' component={DrawerNav}
        options={{ animation: "slide_from_left", presentation: "card", animationTypeForReplace: "push" }} />
    </Stack.Navigator>
  )
}
export default UserStack
