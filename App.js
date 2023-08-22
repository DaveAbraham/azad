import React from 'react';
import {SafeAreaView} from 'react-native';

import AppNavigator from './src/navigation';

export const App = () => {
  return (
    // <SafeAreaView style={{width: '100%', height: '100%'}}>
      <AppNavigator />
    // </SafeAreaView>
  );
};
export default App;
