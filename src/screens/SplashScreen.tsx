import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useCallback, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../types';
const logoImg = require('../assets/splashscreen/logo.png');
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_VIEWED_ONBOARDING} from '../constants';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen: FC<Props> = ({navigation}) => {
  const handleNextScreen = useCallback(async () => {
    try {
      const isViewed = await AsyncStorage.getItem(KEY_VIEWED_ONBOARDING);
      if (isViewed) {
        navigation.push('Home');
        return;
      }

      navigation.push('OnBoarding');
    } catch (error) {
      console.error(error);
      navigation.push('OnBoarding');
    }
  }, [navigation]);

  useEffect(() => {
    setTimeout(() => {
      handleNextScreen();
    }, 250);
  }, [handleNextScreen]);

  return (
    <View style={styles.container}>
      <View style={styles.constainerImage}>
        <Image source={logoImg} />
      </View>
      <Text style={styles.version}>Version 1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  constainerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  version: {
    color: '#4838D1',
    fontSize: 14,
  },
});

export default SplashScreen;
