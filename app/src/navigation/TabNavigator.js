import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeStackNavigator,
  ProfileStackNavigator,
  AdsStackNavigator,
  OrderStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Ads" component={AdsStackNavigator} />
      <Tab.Screen name="Order" component={OrderStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
