import React from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default ({num = 0}) => {
  return (
    <View>
      <Text style={Estilo.txtG}>O resultado é:</Text>
      {num % 2 === 0 ? (
        <Text style={Estilo.txtG}>Par</Text>
      ) : (
        <Text style={Estilo.txtG}>Ímpar</Text>
      )}
    </View>
  );
};

//Jeito que repete muito código

// export default ({num = 0}) => {
//     if ((num || 0) % 2 === 0) {
//       return (
//         <View>
//           <Text>O resultado é:</Text>
//           <Text style={Estilo.txtG}>par</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View>
//           <Text>O resultado é:</Text>
//           <Text style={Estilo.txtG}>ímpar</Text>
//         </View>
//       );
//     }
//   };
