import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './Screens/Start/Start';
import AuthScreen from './Screens/Auth/Auth';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Start" component={StartScreen} />
                <Stack.Screen options={{headerShown: false}} name="Auth" component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;