import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SplashScreen from './src/screens/SplashScreen';
import {RootStackParamList} from './src/types';

import {RootState, store} from './src/app/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_TOKEN, KEY_VIEWED_ONBOARDING} from './src/constants';
import LoginScreen from './src/screens/LoginScreen';
import {setToken, setViewedOnBoarding} from './src/app/slices/AuthSlice';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const Navigation: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [afterMinDuration, setAfterMinDuration] = useState(false);

  const token = useSelector((state: RootState) => state.auth.token);
  const isViewedOnBoarding = useSelector(
    (state: RootState) => state.auth.viewedOnBoarding,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const [localViewedOnBoarding, localToken] = await Promise.all([
          AsyncStorage.getItem(KEY_VIEWED_ONBOARDING),
          AsyncStorage.getItem(KEY_TOKEN),
        ]);

        if (!localViewedOnBoarding) {
          dispatch(setViewedOnBoarding(false));
        }

        if (localToken) {
          dispatch(setToken(localToken));
        }

        setTimeout(() => {
          setAfterMinDuration(true);
        }, 1000);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || !afterMinDuration) {
    return <SplashScreen />;
  }

  console.log(isLoading, token, isViewedOnBoarding);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          gestureEnabled: false,
          animation: 'fade',
        }}>
        {!isViewedOnBoarding && (
          <RootStack.Screen
            options={{headerShown: false}}
            name="OnBoarding"
            component={OnBoardingScreen}
          />
        )}

        {isViewedOnBoarding && token ? (
          <RootStack.Group>
            <RootStack.Screen
              options={{headerShown: false}}
              name="Home"
              component={HomeScreen}
            />
          </RootStack.Group>
        ) : (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
