import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const blueAccent = require('@app/modules/auth/onboarding/assets/blue-accent.png');
const orangeAccent = require('@app/modules/auth/onboarding/assets/orange-accent.png');

const Accent = () => {
  return (
    <View style={accentStyles.containerAccent}>
      <Image style={accentStyles.blueAccent} source={blueAccent} />
      <Image style={accentStyles.orangeAccent} source={orangeAccent} />
    </View>
  );
};

const accentStyles = StyleSheet.create({
  containerAccent: {
    position: 'absolute',
    width: '100%',
    zIndex: -10,
  },
  blueAccent: {},
  orangeAccent: {
    alignSelf: 'flex-end',
  },
});

export default Accent;
