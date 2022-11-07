import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav';

const Stack = createStackNavigator();

const TabStack = () => {
    return (
        <Stack.Navigator initialRouteName='TabNav'
            screenOptions={{ headerShown: false }} >

            <Stack.Screen name='TabNav' component={TabNav} />


        </Stack.Navigator>
    )
}

export default TabStack

