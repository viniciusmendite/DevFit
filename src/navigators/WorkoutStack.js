import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WorkoutSelect from '../screens/workoutSelect/index';
import WorkoutCheckList from '../screens/workoutCheckList/index';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WorkoutSelect" component={WorkoutSelect} options={{headerStyle:{backgroundColor: "#4AC34E"}}} />
            <Stack.Screen name="WorkoutCheckList" component={WorkoutCheckList} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}