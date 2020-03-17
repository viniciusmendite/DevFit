import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import MyWorkouts from '../screens/myWorkouts/index';
import EditWorkout from '../screens/editWorkout/index';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyWorkouts" component={MyWorkouts} options={{headerStyle:{backgroundColor: "#4AC34E"}}} />
      <Stack.Screen name="EditWorkout" component={EditWorkout} options={{headerStyle:{backgroundColor: "#4AC34E"}}} />
    </Stack.Navigator>
  );
}