import {View, Text} from 'react-native';
import React from 'react';
import {Container, Title, Nome, BotaoContainer, BotaoTexto} from './src/styles';

export default function App() {
  return (
    <Container>
      <Title cor="#FF0000">Olá</Title>
      <Nome>Caroline</Nome>

      <BotaoContainer onPress={() => alert('CLICOU')}>
        <BotaoTexto>Entrar</BotaoTexto>
      </BotaoContainer>
    </Container>
  );
}
