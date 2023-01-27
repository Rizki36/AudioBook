import React, {forwardRef} from 'react';
import {Animated, FlatList, FlatListProps} from 'react-native';
import {TOnboardingItem} from '../../types';
import SwiperItem from './SwiperItem';

type TSwiper = {
  scrollX: Animated.Value;
  viewableItemsChanged: FlatListProps<TOnboardingItem>['onViewableItemsChanged'];
  onboardingItems: TOnboardingItem[];
};
const Swiper = forwardRef<FlatList<TOnboardingItem>, TSwiper>(
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
