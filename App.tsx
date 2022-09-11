import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SplashScreen from './src/screens/SplashScreen';
import {RootStackParamList} from './src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="OnBoarding"
          component={OnBoardingScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
