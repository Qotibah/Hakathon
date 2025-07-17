import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'Hakathon-main\src\src\navigation\AppNavigator.js';


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
