import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ControlledInput from '@app/components/General/ControlledInput';
import {useForm} from 'react-hook-form';
import Button from '@app/components/General/Button';
const logoImg = require('@app/assets/general/logo.png');

import type {RootStackParamList} from '@app/types';
import CheckBox from '@app/components/General/CheckBox';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: FC<Props> = ({}) => {
  const {control} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <View style={styles.container}>
      <Image source={logoImg} />

      <View style={styles.containerLoginText}>
        <Text style={styles.loginText}>Login to Your Account</Text>
      </View>

      <View style={styles.containerContent}>
        <ControlledInput
          controllerProps={{name: 'email', control}}
          inputProps={{
            placeholder: 'Email',
          }}
        />
        <ControlledInput
          controllerProps={{name: 'password', control}}
          inputProps={{
            placeholder: 'Password',
          }}
        />
        <View>
          <CheckBox title="Remember me" />
        </View>
        <Button
          pressableProps={{
            onPress: () => {
              console.warn('hai');
            },
          }}>
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 40,
  },
  containerLoginText: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 16,
  },
  loginText: {
    textAlign: 'left',
    color: '#2E2E5D',
    fontWeight: '600',
  },
  containerContent: {
    width: '100%',
    maxWidth: 450,
  },
});

export default LoginScreen;
