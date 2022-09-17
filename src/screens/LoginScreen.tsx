import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ControlledInput from '@app/components/General/ControlledInput';
import {useForm} from 'react-hook-form';
import Button from '@app/components/General/Button';
const logoImg = require('@app/assets/general/logo.png');
const facebookImg = require('@app/assets/login/facebook.png');
const googleImg = require('@app/assets/login/google.png');
const twitterImg = require('@app/assets/login/twitter.png');

import type {RootStackParamList} from '@app/types';
import CheckBox from '@app/components/General/CheckBox';
import ImageButton from '@app/components/General/ImageButton';
import TextButton from '@app/components/General/TextButton';
import {useAppDispatch} from '@app/app/store';
import {userLogin} from '@app/app/slices/AuthSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

type TFieldValues = {
  email: string;
  password: string;
};

const LoginScreen: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  const {control, handleSubmit} = useForm<TFieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: TFieldValues) => {
    if (data.email === 'admin' && data.password) {
      await dispatch(userLogin());
    } else {
      console.warn('u:admin, p:admin');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 24}}>
        <Image source={logoImg} />
      </View>

      <View style={styles.containerLoginText}>
        <Text style={styles.loginText}>Login to Your Account</Text>
      </View>

      <View style={styles.containerContent}>
        <ControlledInput
          controllerProps={{name: 'email', control}}
          inputProps={{
            placeholder: 'Email',
            autoCapitalize: 'none',
          }}
        />
        <ControlledInput
          controllerProps={{name: 'password', control}}
          inputProps={{
            placeholder: 'Password',
            secureTextEntry: true,
          }}
        />
        <View>
          <CheckBox title="Remember me" />
        </View>
        <Button
          pressableProps={{
            onPress: handleSubmit(onSubmit),
          }}
          pressableStyle={{
            marginBottom: 16,
          }}>
          Login
        </Button>
      </View>
      <View style={styles.containerForgotPasswordText}>
        <TextButton textStyle={styles.forgotPasswordText}>
          Forget Password ?
        </TextButton>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.orLoginText}>Or login with</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <ImageButton source={googleImg} pressableStyle={{marginRight: 16}} />
        <ImageButton source={facebookImg} />
        <ImageButton source={twitterImg} pressableStyle={{marginLeft: 16}} />
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
  containerForgotPasswordText: {
    alignItems: 'flex-end',
    width: '100%',
  },
  forgotPasswordText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#F77A55',
  },
  containerContent: {
    width: '100%',
    maxWidth: 450,
  },
  containerBottom: {
    marginTop: 32,
  },
  orLoginText: {
    fontSize: 14,
    color: '#2E2E5D',
  },
});

export default LoginScreen;
