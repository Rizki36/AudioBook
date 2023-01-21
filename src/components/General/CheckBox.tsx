import React, {FC, useRef, useState} from 'react';
import CheckBoxCommunity from '@react-native-community/checkbox';
import type {CheckBoxProps} from '@react-native-community/checkbox';
import {StyleProp, Text, View, ViewStyle} from 'react-native';

const CheckBox: FC<CheckBoxProps & {title?: string}> = ({title, ...props}) => {
  const checkboxRef = useRef<CheckBoxCommunity>(null);
  const [value, setValue] = useState(false);

  const containerStyle: StyleProp<ViewStyle> = {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  };
  return (
    <View style={containerStyle}>
      <CheckBoxCommunity
        value={value}
        onValueChange={_ => {
          setValue(prev => !prev);
        }}
        ref={checkboxRef}
        style={{width: 20, height: 20}}
        lineWidth={1}
        boxType="square"
        onCheckColor="#4838D1"
        onTintColor="#4838D1"
        {...props}
      />
      {title && (
        <Text
          onPress={() => {
            setValue(prev => !prev);
          }}
          style={{marginLeft: 12, fontSize: 14, color: '#2E2E5D'}}>
          {title}
        </Text>
      )}
    </View>
  );
};
export default CheckBox;
