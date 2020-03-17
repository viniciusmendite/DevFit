import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home/index';
import HomeSettings from '../screens/homeSettings/index';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:"#4AC34E"}}}/>
            <Stack.Screen name="HomeSettings" component={HomeSettings} options={{headerStyle:{backgroundColor: "#4AC34E"}}}/>
        </Stack.Navigator>
    );
}