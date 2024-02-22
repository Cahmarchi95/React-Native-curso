import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0}>
        <Text style={Estilo.txtG}>V0</Text>
      </View>
      <View style={style.V1}>
        <Text style={Estilo.txtG}>V1</Text>
      </View>
      <View style={style.V2}>
        <Text style={Estilo.txtG}>V2</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },

  V0: {
    backgroundColor: '#D90368',
    height: 300,
  },

  V1: {
    backgroundColor: '#00CC66',
    flexGrow: 9,
  },

  V2: {
    backgroundColor: '#EE7B30',
    flexGrow: 1,
  },
});
