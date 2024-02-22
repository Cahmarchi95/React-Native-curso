import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV1}>
      <Quadrado cor={'#EE7B30'} />
      <Quadrado cor={'#F1C40F'} />
      <Quadrado cor={'#D90368'} />
      <Quadrado cor={'#00CC66'} />
      <Quadrado cor={'#2274A5'} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});
