import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpacidadeAnimada: new Animated.Value(0),
    };

    // this.carregarGrafico = this.carregarGrafico.bind(this);

    //   carregarGrafico(){
    // }

    //Animação em sequência e paralelo ao mesmo tempo

    // Animated.sequence([
    //   Animated.timing(this.state.OpacidadeAnimada, {
    //     toValue: 1,
    //     duration: 1500,
    //     useNativeDriver: false,
    //   }),
    //   Animated.parallel([
    //     Animated.timing(this.state.LarAnimada, {
    //       toValue: 300,
    //       duration: 2000,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(this.state.AltAnimada, {
    //       toValue: 200,
    //       duration: 2000,
    //       useNativeDriver: false,
    //     }),
    //   ]),
    //   Animated.timing(this.state.OpacidadeAnimada, {
    //     toValue: 0,
    //     duration: 1500,
    //     useNativeDriver: false,
    //   }),
    // ]).start();

    //Animação em paralelo (as duas ocorrem de forma simultânea)
    // Animated.parallel([
    //   Animated.timing(this.state.LarAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(this.state.AltAnimada, {
    //     toValue: 200,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }),
    // ]).start();

    //Animação em sequência

    // Animated.sequence([
    //   Animated.timing(this.state.LarAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(this.state.AltAnimada, {
    //     toValue: 200,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(this.state.OpacidadeAnimada, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: false,
    //   }),
    // ]).start();

    //Animação única

    // Animated.timing(this.state.AltAnimada, {
    //   toValue: 150,
    //   duration: 2000,
    //   useNativeDriver: false, // Add This line
    // }).start();

    //Animações em loop e sequência

    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(this.state.LarAnimada, {
    //       toValue: 200,
    //       duration: 700,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(this.state.LarAnimada, {
    //       toValue: 150,
    //       duration: 700,
    //       useNativeDriver: false,
    //     }),
    //   ]),
    // ).start();

    this.carregarGrafico = this.carregarGrafico.bind(this);
  }

  carregarGrafico() {
    Animated.sequence([
      Animated.timing(this.state.OpacidadeAnimada, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.AltAnimada, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={{flexGrow: 1}}>
        <View
          style={{
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#4169E1',
          }}>
          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text
              style={{
                fontSize: 25,
                color: '#FFFF',
              }}>
              Gerar gráfico
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text>Vendas</Text>
          <Animated.View
            style={{
              width: this.state.LarAnimada,
              height: this.state.AltAnimada,
              opacity: this.state.OpacidadeAnimada,
              backgroundColor: '#FF0000',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 22, textAlign: 'center'}}>
              R$ 150,00
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
