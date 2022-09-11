import React, {FC} from 'react';
import {
  Pressable,
  Text,
  PressableProps,
  TextProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';

const Button: FC<{
  pressableProps?: PressableProps;
  textProps?: TextProps;
  children: React.ReactNode;
  pressableStyle?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
}> = ({pressableProps, textProps, pressableStyle, textStyle, children}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#4838D1',
        },
        styles.button,
        pressableStyle,
      ]}
      {...pressableProps}>
      {({}) => (
        <Text style={[styles.text, textStyle]} {...textProps}>
          {children}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
  },
});

export default Button;
