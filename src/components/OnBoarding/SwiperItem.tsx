import React, {FC} from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

type SwiperItemType = {
  illustration: any;
  title: string;
  desc: string;
};
const SwiperItem: FC<SwiperItemType> = ({illustration, title, desc}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.itemSwiper, {width}]}>
      <Image source={illustration} style={[{width, resizeMode: 'contain'}]} />
      <View style={{width: '80%'}}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDesc}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemSwiper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  itemTitle: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
    fontWeight: '600',
  },
  itemDesc: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 14,
  },
});

export default SwiperItem;
