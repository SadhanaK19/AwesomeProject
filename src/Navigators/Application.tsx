import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeContainer from '../Containers/WelcomeContainer/WelcomeContainer';
import CharacterContainer from '../Containers/CharacterContainer/CharacterContainer';
import StoryContainer from '../Containers/StoryContainer/StoryContainer';

const Stack = createNativeStackNavigator();

function ApplicationNavigator() {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={WelcomeContainer} />
                    <Stack.Screen name="Character" component={CharacterContainer} />
                    <Stack.Screen name="Story" component={StoryContainer} />
                </Stack.Navigator>
            </NavigationContainer>
    );
}


export default ApplicationNavigator
