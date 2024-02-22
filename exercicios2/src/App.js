import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
// import CompOficial, {Comp1, Comp2} from './components/Multi';
// import Primeiro from './components/Primeiro';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import Quadrado from './components/layout/Quadrado';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV4 from './components/layout/FlexboxV4';

import Mega from './components/mega/Mega';

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdeNumeros={6} />

    {/* <Text>Olá</Text> */}
    {/* 
    
      <FlexboxV4 />
      <FlexboxV3 />
      <FlexboxV2 />
      <FlexboxV1 />
      <Quadrado/>
      <DigiteSeuNome />
      <ListaProdutosV2 />
      <ListaProdutos />
      <UsuarioLogado usuario={{nome: 'Caroline', email: 'carol@email.com'}} />
      <UsuarioLogado usuario={{email: 'ze@email.com'}} />
      <UsuarioLogado usuario={{nome: 'Carlos'}} />
      <UsuarioLogado usuario={null} />
      <UsuarioLogado usuario={{}} />
      <Familia>
      <Membro nome="José" sobrenome="Silva" />
      <Membro nome="Maria" sobrenome="Silva" />
      <Membro nome="Henrique" sobrenome="Silva" />
      <Membro nome="Gabriel" sobrenome="Silva" />
    </Familia>
    <Familia>
      <Membro nome="Caroline" sobrenome="Petherson" />
      <Membro nome="Mariane" sobrenome="Petherson" />
    </Familia>
    <ParImpar num={5} />
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Pai /> 
    <Contador inicial={100} passo={13} />
    <Contador />
    <Botao />
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de Cadastro do Produto"
    />
    <Aleatorio min={1} max={60} />
    <MinMax min={3} max={20} />
    <MinMax min={1} max={94} /> 
     <Comp1 />
    <Comp2 />
    <CompOficial />
    <Primeiro />   */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

// export default () => {
//   return <Text>Olá React Native!!</Text>;
// };

// export default () => <Text>Olá React Native!!!</Text>;
