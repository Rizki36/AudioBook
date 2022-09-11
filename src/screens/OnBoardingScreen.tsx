import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
} from 'react-native';
import Accent from '../components/OnBoarding/Accent';
import BottomSection from '../components/OnBoarding/BottomSection';
import SwiperItem from '../components/OnBoarding/SwiperItem';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

type ItemType = {
  id: string;
  title: string;
  desc: string;
  illustration: any;
};

const onboardingItems: ItemType[] = [
  {
    id: '1',
    title: 'Tittle One',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    illustration: require('../assets/onboarding/Illustration-1.png'),
  },
  {
    id: '2',
    title: 'Tittle Two',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    illustration: require('../assets/onboarding/Illustration-2.png'),
  },
  {
    id: '3',
    title: 'Tittle Three',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    illustration: require('../assets/onboarding/Illustration-3.png'),
  },
];

const OnBoardingScreen: FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef<
    FlatListProps<ItemType>['onViewableItemsChanged']
  >(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index ?? 0);
  }).current;

  return (
    <>
      <Accent />
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <FlatList
            data={onboardingItems}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            bounces={false}
            keyExtractor={({id}) => id}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
            renderItem={({item}) => (
              <SwiperItem
                title={item.title}
                desc={item.desc}
                illustration={item.illustration}
              />
            )}
          />
        </View>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
          }}>
          <BottomSection activeIndex={currentIndex} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  swiperContainer: {
    flex: 1,
    height: '100%',
    alignSelf: 'center',
  },
});

export default OnBoardingScreen;
