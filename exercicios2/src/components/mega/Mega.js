import React, {Component} from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  //solução para o this apontar a instância corretamente
  //1ª forma utilizando o construtor
  // constructor(props) {
  //   super(props);
  //   this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this);
  // }
  //2ª forma utilizando arrow-function
  //onChangeText={qtde => this.alterarQtdeNumero(qtde)}
  //3ª forma, transformar a função em arrow function e passá-la como
  //referência na função OnChangedText

  alterarQtdeNumero = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  // gerarNumeros = () => {
  //   const numeros = Array(this.state.qtdeNumeros)
  //     .fill()
  //     .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
  //     .sort((a, b) => a - b);
  //   this.setState({numeros});
  // };

  //versão alternativa sem reduce
  gerarNumeros = () => {
    const {qtdeNumeros} = this.state;
    const numeros = [];
    for (let i = 0; i < qtdeNumeros; i++) {
      const n = this.gerarNumeroNaoContido(numeros);
      numeros.push(n);
    }

    numeros.sort((a, b) => a - b);
    this.setState({numeros});
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <MegaNumero key={num} num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Estilo.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Quantidade de números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
