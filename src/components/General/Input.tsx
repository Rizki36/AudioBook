import React, {forwardRef} from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import {TextInput, TextInputProps, StyleProp, TextStyle} from 'react-native';

const defaultInputStyle: StyleProp<TextStyle> = {
  fontSize: 14,
  color: '#2E2E5D',
  paddingHorizontal: 24,
  paddingVertical: 16,
};

const defaultContainerStyle: StyleProp<ViewStyle> = {
  backgroundColor: '#F5F5FA',
  width: '100%',
  borderRadius: 8,
  marginBottom: 16,
};

const Input = forwardRef<
  TextInput,
  TextInputProps & {containerProps?: ViewProps}
>(({style, containerProps = {}, ...props}, ref) => {
  const {style: containerStyle = {}, ...restContainerProps} = containerProps;

  return (
    <View
      style={[defaultContainerStyle, containerStyle]}
      {...restContainerProps}>
      <TextInput
        ref={ref}
        style={[defaultInputStyle, style]}
        placeholderTextColor="#B8B8C7"
        {...props}
      />
    </View>
  );
});

export default Input;
