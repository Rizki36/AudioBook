import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
} from 'react-native';
import Accent from '../common/General/Accent';
import BottomSection from '../components/OnBoarding/BottomSection';
import Swiper from '../components/OnBoarding/Swiper';
import {TOnboardingItem, TRootStackParamList} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_VIEWED_ONBOARDING} from '../common/constants';
import {viewedOnBoardingAtom} from '@app/common/atoms/auth';
import {useSetAtom} from 'jotai';

type TProps = NativeStackScreenProps<TRootStackParamList, 'OnBoarding'>;

const onboardingItems: TOnboardingItem[] = [
  {
    id: '1',
    title: 'Tittle One',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    illustration: require('@app/modules/auth/onboarding/assets/Illustration-1.png'),
  },
  {
    id: '2',
    title: 'Tittle Two',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    illustration: require('@app/modules/auth/onboarding/assets/Illustration-2.png'),
  },
  {
    id: '3',
    title: 'Tittle Three',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
    illustration: require('@app/modules/auth/onboarding/assets/Illustration-3.png'),
  },
];

const OnBoardingScreen: FC<TProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const swiperRef = useRef<FlatList<TOnboardingItem>>(null);
  const setViewedOnBoarding = useSetAtom(viewedOnBoardingAtom);

  const viewableItemsChanged = useRef<
    FlatListProps<TOnboardingItem>['onViewableItemsChanged']
  >(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index ?? 0);
  }).current;

  const handleNextScreen = async () => {
    try {
      await AsyncStorage.setItem(KEY_VIEWED_ONBOARDING, 'true');

      setViewedOnBoarding(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickNext = async () => {
    if (onboardingItems.length === currentIndex + 1) {
      handleNextScreen();
    } else {
      swiperRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    }
  };

  const onClickSkip = () => {
    setViewedOnBoarding(true);
  };

  return (
    <>
      <Accent />
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <Swiper
            ref={swiperRef}
            onboardingItems={onboardingItems}
            scrollX={scrollX}
            viewableItemsChanged={viewableItemsChanged}
          />
        </View>
        <View style={styles.containerBottomSection}>
          <BottomSection
            onBoardingLength={onboardingItems.length}
            activeIndex={currentIndex}
            onClickNext={onClickNext}
            onClickSkip={onClickSkip}
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
