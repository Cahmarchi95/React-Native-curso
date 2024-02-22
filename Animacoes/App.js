import {View, Text, StyleSheet, Animated} from 'react-native';
import React, {Component} from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(0),
    };

    Animated.timing(this.state.LarAnimada, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }

  //Interpolações nas amimaçoes (para transformar em porcentagem)

  render() {
    let procentagemAnimated = this.state.LarAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            backgroundColor: '#4169E1',
            width: procentagemAnimated,
            height: 25,
          }}></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default App;
