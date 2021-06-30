import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { HOME_SCREEN } from './screenNames';

const HomeStack = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeStack;