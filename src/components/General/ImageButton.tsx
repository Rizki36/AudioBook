import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

const ImageButton: FC<
  PressableProps & {
    pressableStyle?: StyleProp<ViewStyle>;
    source: ImageSourcePropType;
  }
> = ({pressableStyle = {}, source, ...props}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        styles.container,
        pressableStyle,
      ]}
      {...props}>
      {() => {
        return <Image source={source} />;
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 31.5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#4838D1',
  },
});

export default ImageButton;
