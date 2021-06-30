import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { HOME_SCREEN, RESIDENT_SCREEN } from './screenNames';
import ResidentScreen from '../screens/Home/ResidentScreen';

const HomeStack = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
            <HomeStack.Screen name={RESIDENT_SCREEN} component={ResidentScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeStack;