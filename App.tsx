import React from 'react';
import MainNavigators from './src/navigators/MainNavigators';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigators />
    </SafeAreaProvider>
  );
}
