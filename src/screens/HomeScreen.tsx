import {tokenAtom} from '@app/atoms/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSetAtom} from 'jotai';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: FC<Props> = () => {
  const setToken = useSetAtom(tokenAtom);

  const logout = async () => {
    try {
      setToken(null);
      await AsyncStorage.clear();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        onPress={async () => {
          logout();
        }}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
