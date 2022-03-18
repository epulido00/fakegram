import React from 'react';

import { NativeBaseProvider } from 'native-base'
import {NavigationContainer} from '@react-navigation/native';

import LoginNavigation from './src/navigation/LoginNavigation';
import {theme} from './src/theme/theme';
import TabNavigation from './src/navigation/TabNavigation';

const App = () => {
  const logged = true;
  return (
    <NativeBaseProvider theme={ theme }>
      <NavigationContainer>
        {
          logged 
            ? <TabNavigation /> 
            : <LoginNavigation /> 
        }
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

