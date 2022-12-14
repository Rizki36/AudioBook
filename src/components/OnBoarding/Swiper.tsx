import React, {forwardRef} from 'react';
import {Animated, FlatList, FlatListProps} from 'react-native';
import {OnboardingItemType} from '../../types';
import SwiperItem from './SwiperItem';

type SwiperType = {
  scrollX: Animated.Value;
  viewableItemsChanged: FlatListProps<OnboardingItemType>['onViewableItemsChanged'];
  onboardingItems: OnboardingItemType[];
};
const Swiper = forwardRef<FlatList<OnboardingItemType>, SwiperType>(
  ({scrollX, onboardingItems, viewableItemsChanged}, ref) => {
    return (
      <FlatList
        ref={ref}
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
    );
  },
);

export default Swiper;
