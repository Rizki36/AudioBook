import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: FC<Props> = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        onPress={async () => {
          await AsyncStorage.clear();
        }}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
