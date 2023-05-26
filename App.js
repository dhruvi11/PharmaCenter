import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './app/src/navigation/MainNavigator';

console.disableYellowBox = true;

// Component
function App() {
  return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
  );
}
export default App;
