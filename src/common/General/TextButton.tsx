import React, {FC, ReactNode} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

const TextButton: FC<{
  pressableProps?: PressableProps;
  pressableStyle?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  textStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}> = ({pressableProps, pressableStyle, textProps, textStyle, children}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        pressableStyle,
      ]}
      {...pressableProps}>
      {() => {
        return (
          <Text style={[textStyle]} {...textProps}>
            {children}
          </Text>
        );
      }}
    </Pressable>
  );
};

export default TextButton;
