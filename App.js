import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native'
import store from './src/config/redux/configureStore';
import AppNavigation from './src/config/navigation/appNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};


export default App;
