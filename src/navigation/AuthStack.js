import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginWith from '../Screens/AuthScreens/LoginWith';
import SignUp from '../Screens/AuthScreens/SignUp';
import ChooseProfile from '../Screens/AuthScreens/ChooseProfile';
import Login from '../Screens/AuthScreens/Login';
import Forgetpassword from '../Screens/AuthScreens/Forgetpassword';
import CodeConfirmation from '../Screens/AuthScreens/CodeConfirmation';
import UpdatePassword from '../Screens/AuthScreens/UpdatePassword';
import Addaddress from '../Screens/AuthScreens/Addaddress';
import MapPinlocation from '../Screens/AuthScreens/MapPinlocation';
import YourFavCategories from '../Screens/AuthScreens/YourFavCategories';
import UserStack from './UserStack';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='LoginWith'
            screenOptions={{
                headerShown: false,
                animation: "fade", presentation: "card", animationTypeForReplace: "push"
            }} >

            <Stack.Screen name='LoginWith' component={LoginWith} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='ChooseProfile' component={ChooseProfile} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Forgetpassword' component={Forgetpassword} />
            <Stack.Screen name='CodeConfirmation' component={CodeConfirmation} />
            <Stack.Screen name='UpdatePassword' component={UpdatePassword} />
            <Stack.Screen name='Addaddress' component={Addaddress} />
            <Stack.Screen name='MapPinlocation' component={MapPinlocation} />
            <Stack.Screen name='YourFavCategories' component={YourFavCategories} />
            <Stack.Screen name='UserStack' component={UserStack} />

        </Stack.Navigator>
    )
}

export default AuthStack

