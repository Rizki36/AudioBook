import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useRef, useState} from 'react';
import {Animated, FlatListProps, StyleSheet, View} from 'react-native';
import Accent from '../components/OnBoarding/Accent';
import BottomSection from '../components/OnBoarding/BottomSection';
import Swiper from '../components/OnBoarding/Swiper';
import {OnboardingItemType, RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

const onboardingItems: OnboardingItemType[] = [
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
    FlatListProps<OnboardingItemType>['onViewableItemsChanged']
  >(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index ?? 0);
  }).current;

  return (
    <>
      <Accent />
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <Swiper
            onboardingItems={onboardingItems}
            scrollX={scrollX}
            viewableItemsChanged={viewableItemsChanged}
          />
        </View>
        <View style={styles.containerBottomSection}>
          <BottomSection
            onBoardingLength={onboardingItems.length}
            activeIndex={currentIndex}
          />
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
  },
  containerBottomSection: {
    width: '80%',
    alignSelf: 'center',
  },
});

export default OnBoardingScreen;
