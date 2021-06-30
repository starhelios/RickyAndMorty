import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as NavigationService from './navigationService';
import HomeStack from '../../navigation/homeStack';
const AppNavigation = () => {
    return (
        <NavigationContainer ref={NavigationService.navigationRef}>
            <HomeStack />
        </NavigationContainer>
    )
}

export default AppNavigation;