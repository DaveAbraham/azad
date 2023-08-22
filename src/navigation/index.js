import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
