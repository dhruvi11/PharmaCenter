import React from 'react';
import Splash from '../screens/Login/Splash';
import LoginScreen from '../screens/Login/LoginScreen';
import OtpScreen from '../screens/Login/OtpScreen';
import VerifyOtpScreen from '../screens/Login/VerifyOtpScreen';
import LoginWithNumberScreen from '../screens/Login/LoginWithNumberScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import DrawerNavigator from "../navigation/DrawerNavigator";
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigator = ({}) => {
  return (
    <Stack.Navigator>
       {/* <Stack.Screen name="Splash" options={{headerShown: false}}>
        {screenProps => <Splash {...screenProps} />}
      </Stack.Screen> 
      <Stack.Screen name="LoginScreen" options={{headerShown: false}}>
        {screenProps => <LoginScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="OtpScreen" options={{headerShown: false}}>
        {screenProps => <OtpScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="VerifyOtpScreen" options={{headerShown: false}}>
        {screenProps => <VerifyOtpScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="LoginWithNumberScreen" options={{headerShown: false}}>
        {screenProps => <LoginWithNumberScreen {...screenProps} />}
      </Stack.Screen> 
      <Stack.Screen name="SignUpScreen" options={{headerShown: false}}>
        {screenProps => <SignUpScreen {...screenProps} />}
      </Stack.Screen> */}
      <Stack.Screen name="DrawerNavigator" options={{headerShown: false}}>
        {screenProps => <DrawerNavigator {...screenProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
