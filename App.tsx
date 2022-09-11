import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SplashScreen from './src/screens/SplashScreen';
import {RootStackParamList} from './src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          gestureEnabled: false,
          animation: 'fade',
        }}>
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
        <RootStack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
