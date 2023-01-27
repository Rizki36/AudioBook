import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SplashScreen from './src/screens/SplashScreen';
import {RootStackParamList} from './src/types';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_TOKEN, KEY_VIEWED_ONBOARDING} from './src/constants';
import LoginScreen from './src/screens/LoginScreen';
import {ToastProvider} from 'react-native-toast-notifications';
import {useAtom} from 'jotai';
import {tokenAtom, viewedOnBoardingAtom} from '@app/atoms/auth';
import {AppStateStatus, Platform} from 'react-native';
import {
  focusManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {useAppState} from '@app/hooks/useAppState';
import {useOnlineManager} from '@app/hooks/useOnlineManager';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const onAppStateChange = (status: AppStateStatus) => {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
};

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

const App = () => {
  useOnlineManager();
  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Navigation />
      </ToastProvider>
    </QueryClientProvider>
  );
};

const Navigation: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [afterMinDuration, setAfterMinDuration] = useState(false);

  const [token, setToken] = useAtom(tokenAtom);
  const [isViewedOnBoarding, setIsViewedOnBoarding] =
    useAtom(viewedOnBoardingAtom);

  useEffect(() => {
    (async () => {
      try {
        const [localViewedOnBoarding, localToken] = await Promise.all([
          AsyncStorage.getItem(KEY_VIEWED_ONBOARDING),
          AsyncStorage.getItem(KEY_TOKEN),
        ]);

        if (!localViewedOnBoarding) {
          setIsViewedOnBoarding(false);
        }

        if (localToken) {
          setToken(localToken);
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
