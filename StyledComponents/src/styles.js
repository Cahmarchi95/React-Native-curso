import styled from 'styled-components/native';

export const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${props => props.cor};
  font-weight: bold;
`;

export const Nome = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const BotaoContainer = styled.TouchableOpacity`
  background-color: #09caff;
  padding: 5px;
  align-items: center;
  margin-top: 10px;
  border-radius: 5px;
  width: 50%;
`;

export const BotaoTexto = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
