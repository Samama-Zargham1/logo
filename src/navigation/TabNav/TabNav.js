import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from './TabBarIcons';
import Home from '../../Screens/UserTab/Home';
import Orders from '../../Screens/UserTab/Orders';
import Favourites from '../../Screens/UserTab/Favourites';
import Cart from '../../Screens/UserTab/Cart';
import Profile from '../../Screens/UserTab/Profile';
import { heightPixel } from '../../Utils/Responsiveness';
import { COLORS } from '../../Utils/Config';

const Tab = createBottomTabNavigator();

export default function TabNav() {

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                keyboardHidesTabBar: true,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: heightPixel(65), borderTopColor:COLORS.lightGray, borderWidth:1 },
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: Icon1() }} />
            <Tab.Screen name="Orders" component={Orders} options={{ tabBarIcon: Icon2() }} />
            <Tab.Screen name="Favourites" component={Favourites} options={{ tabBarIcon: Icon3() }} />
            <Tab.Screen name="Cart" component={Cart} options={{ tabBarIcon: Icon4() }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: Icon5() }} />

        </ Tab.Navigator>

    );
}
