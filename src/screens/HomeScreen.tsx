import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {userLogout} from '../app/slices/AuthSlice';
import {useAppDispatch} from '../app/store';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: FC<Props> = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        onPress={async () => {
          await dispatch(userLogout());
        }}>
        <Text>Reset</Text>
      </Pressable>
      <Pressable
        onPress={async () => {
          await AsyncStorage.clear();
        }}>
        <Text>clear</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
