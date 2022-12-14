import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const logoImg = require('@app/assets/general/logo.png');

const SplashScreen: FC = () => {
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
    backgroundColor: '#FFF',
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
