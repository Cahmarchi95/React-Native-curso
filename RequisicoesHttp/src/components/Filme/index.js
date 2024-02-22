import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Filme({data}) {
  return (
    <View>
      <Text>{data.nome}</Text>
    </View>
  );
}
