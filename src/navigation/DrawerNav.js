import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerHome from '../Screens/DrawerScreens/DrawerHome';
import Settings from '../Screens/DrawerScreens/Settings';
import ContactUs from '../Screens/DrawerScreens/ContactUs';
import TermConditions from '../Screens/DrawerScreens/TermConditions';
import PrivacyPolicy from '../Screens/DrawerScreens/PrivacyPolicy';


const Stack = createStackNavigator();

const DrawerNav = () => {
    return (
        <Stack.Navigator initialRouteName='DrawerHome'
            screenOptions={{ headerShown: false }} >

            <Stack.Screen name='DrawerHome' component={DrawerHome} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='ContactUs' component={ContactUs} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <Stack.Screen name='TermConditions' component={TermConditions} />


        </Stack.Navigator>
    )
}

export default DrawerNav

