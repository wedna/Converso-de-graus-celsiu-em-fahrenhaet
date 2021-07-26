
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';




export default function  App(){
  const[graus, convertergraus] = useState("10");
  const [gf, alteragrausf] = useState("20");
  
  const converter = () => {
    const converte = (graus * 9 / 5) + 32;
    alteragrausf(converte); 

  };

  useEffect(() => {converter()});

  return (
   <Tela>
     <Titulo>Conversor graus celsiús em fahrenheit</Titulo>
     
     <Input keyboardType="numeric" value={graus} onChangeText={(valor) => {convertergraus(valor)}} placeholder="Qual o ºC?"/>

     <Resultado>
      <ItemResultado>{gf}</ItemResultado>
      <TituloResultado>ºF</TituloResultado>
        
     </Resultado>
   </Tela>

  );
}

const TituloResultado = styled.Text`
  padding-top: 5px;
  color: #FFFDFB;
`;

const ItemResultado = styled.Text`
  padding: 10px 0px 15px 0px;
`;
const Resultado = styled.View`
  margin-top: 10px;
  width: 85%;
  border-radius: 30px;
  background-color: #FF7F50;
  display: flex;
  align-items: center;
`;

const Input = styled.TextInput`
  width:90%;
  
  height: 50px;
  font-size: 20px;
  padding-left: 10px;
  border-radius: 10px;
  background-color: #FFA07A;

`;
const Titulo = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  background-color:#FFDEAD;
`;
const Tela = styled.View`
  flex: 1;
  align-items: center;
  background-color: #FFDAB9;
`;

