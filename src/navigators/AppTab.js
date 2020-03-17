import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import CustomTabBar from '../screens/components/customTabBar/index';
import WorkoutStack from './WorkoutStack';
import MyWorkoutsStack from './MyWorkoutsStack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar
        {...props}
        items={[
          {
            type: 'regular',
            text: 'Início',
            icon: require('../assets/home.png'),
            routes: 'HomeStack'
          },

          {
            type: 'big',
            icon: require('../assets/dumbbell.png'),
            routes: 'WorkoutStack'
          },

          {
            type: 'regular',
            text: 'Meus Treinos',
            icon: require('../assets/myworkouts.png'),
            routes: 'MyWorkoutsStack'
          }
        ]}
      />}
    >
          <Tab.Screen name="HomeStack" component={HomeStack} />
          <Tab.Screen name="MyWorkoutsStack" component={MyWorkoutsStack} />
          <Tab.Screen name="WorkoutStack" component={WorkoutStack} options={{tabBarVisible: false}}/>
    </Tab.Navigator>
  );
}