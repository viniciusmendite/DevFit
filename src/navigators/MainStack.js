import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Preload from '../screens/Preload';
import StarterStack from './StarterStack';
import AppTab from './AppTab';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    
    <Stack.Navigator 
    initialRouteName='Preload'
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="StarterStack" component={StarterStack} />
      <Stack.Screen name="AppTab" component={AppTab} />
    </Stack.Navigator>
  );
}