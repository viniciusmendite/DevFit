import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import StarterIntro from '../screens/starterIntro/index';
import StarterName from '../screens/starterName/index';
import StarterChooseDays from '../screens/starterChooseDays/index';
import StarterLevel from '../screens/starterLevel/index';
import StarterRecommendations from '../screens/starterRecommendations/index';
import AppTab from './AppTab';

const Stack = createStackNavigator();

export default function MyStack() {


  return (
    <Stack.Navigator>
      <Stack.Screen name="StarterIntro" component={StarterIntro} options={{ headerShown: false }} />
      <Stack.Screen name="StarterName" component={StarterName} />
      <Stack.Screen name="StarterChooseDays" component={StarterChooseDays} />
      <Stack.Screen name="StarterLevel" component={StarterLevel} />
      <Stack.Screen name="StarterRecommendations" component={StarterRecommendations} />     
      <Stack.Screen name="AppTab" component={AppTab} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}