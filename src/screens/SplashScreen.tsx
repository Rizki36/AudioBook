import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../types';
const logoImg = require('../assets/splashscreen/logo.png');

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen: FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('OnBoarding');
    }, 1000);
  }, [navigation]);
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
