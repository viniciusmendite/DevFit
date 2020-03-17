import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './src/store';
import MainStack from './src/navigators/MainStack';

export default () => (
    <NavigationContainer>
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
            <MainStack />
        </PersistGate>
    </Provider>
    </NavigationContainer>
)