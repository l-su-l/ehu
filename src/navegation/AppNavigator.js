import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../pages/ProfileScreen';
import HomeScreen from '../pages/HomeScreen';
import Carru from '../components/Carru';
import HandleOfModel from '../pages/HandleOfModel'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerShown: false
                    }}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
                    headerShown: false
                    }}/>
                <Stack.Screen name="Carru" component={Carru} />
                <Stack.Screen name="HandleOfModel" component={HandleOfModel} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
