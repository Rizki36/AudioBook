import React, {FC, useMemo} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Button from '../General/Button';

type TBottomSection = {
  activeIndex: number;
  onBoardingLength: number;
  onClickNext: () => any;
  onClickSkip: () => any;
};
const BottomSection: FC<TBottomSection> = ({
  activeIndex,
  onBoardingLength,
  onClickNext,
  onClickSkip,
}) => {
  const indicators = useMemo(() => {
    const arrayLength = [...Array(onBoardingLength).keys()];

    return arrayLength.map((_, index) => (
      <IndicatorItem
        key={index}
        active={activeIndex === index}
        style={{...(onBoardingLength !== index && {marginRight: 12})}}
      />
    ));
  }, [onBoardingLength, activeIndex]);

  const isLastStep = activeIndex + 1 === onBoardingLength;

  return (
    <View style={{marginTop: 40}}>
      <View style={styles.indicatorContainer}>{indicators}</View>

      <View style={styles.containerAction}>
        {!isLastStep && (
          <Button
            pressableStyle={{backgroundColor: 'none', flex: 1}}
            textStyle={{color: '#4838D1'}}
            pressableProps={{onPress: onClickSkip}}>
            Skip
          </Button>
        )}

        <Button
          pressableStyle={{flex: 1}}
          pressableProps={{
            onPress: onClickNext,
          }}>
          {isLastStep ? 'Lets Get Started' : 'Next'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 80,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
});

const IndicatorItem: FC<{
  active?: boolean;
  style?: StyleProp<ViewStyle>;
}> = ({active, style}) => {
  return (
    <View
      style={[
        indicatorItemStyle.container,
        {
          ...(active && indicatorItemStyle.active),
        },
        style,
      ]}
    />
  );
};

const indicatorItemStyle = StyleSheet.create({
  container: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: '#7466E3',
  },
  active: {
    backgroundColor: '#F77A55',
  },
});

export default BottomSection;
