import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Button from '../General/Button';

type BottomSectionType = {
  activeIndex: number;
};
const BottomSection: FC<BottomSectionType> = ({activeIndex}) => {
  return (
    <View style={{marginTop: 40}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40,
        }}>
        <IndicatorItem active={activeIndex === 0} style={{marginRight: 12}} />
        <IndicatorItem active={activeIndex === 1} style={{marginRight: 12}} />
        <IndicatorItem active={activeIndex === 2} />
      </View>
      <View style={styles.containerAction}>
        <Button
          pressableStyle={{backgroundColor: 'none', flex: 1}}
          textStyle={{color: '#4838D1'}}>
          Skip
        </Button>
        <Button pressableStyle={{flex: 1}}>Next</Button>
      </View>
    </View>
  );
};

const IndicatorItem: FC<{
  active?: boolean;
  style?: StyleProp<ViewStyle>;
}> = ({active, style}) => {
  return (
    <View
      style={[
        {
          height: 12,
          width: 12,
          borderRadius: 12,
          backgroundColor: active ? '#F77A55' : '#7466E3',
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  containerAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 80,
  },
});

export default BottomSection;
