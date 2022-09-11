import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {userLogin, userLogout} from '../app/slices/AuthSlice';
import {useAppDispatch} from '../app/store';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={async () => {
          await dispatch(userLogin());
        }}>
        <Text>Login</Text>
      </Pressable>
      <Pressable
        onPress={async () => {
          await dispatch(userLogout());
        }}>
        <Text>Reset</Text>
      </Pressable>
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
});

export default LoginScreen;
