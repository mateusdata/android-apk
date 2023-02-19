import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const SetimaPagina = (props) => {
  const [number, setNumber] = useState(0);
  const [minino, setMinino] = useState(0);
  const [maximo, setMaximo] = useState(0);
  const [lagsInput, setFlagsInput] = useState(false);
  function alterarNumero() {
    let numberRandomic = Math.floor(Math.random() * (parseInt(maximo) + 1 - parseInt(minino)) + parseInt(minino));
    setNumber(numberRandomic);
    
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Gerador de nuúmers aleatorios</Text>
      <Text>Valor Mínimo: </Text>
      <TextInput
        value={minino}
        onChangeText = { valor => setMinino(valor) }
        keyboardType="numeric"
        textAlign="center"
        autoFocus={true}
        maxLength={5}
        placeholder="Informe um numero"
        onFocus={() => {
          setFlagsInput(true);
        }}
        onBlur={() => {
          setFlagsInput(false);
        }}
        style={{
          width: 200,
          height: 50,
          borderWidth: lagsInput ? 2 : 0.5,
          borderColor: lagsInput ? "#FF830B" : "#3a3838",
          borderRadius: 15,
          marginBottom: 20,
        }}
      />
      <Text>Valor Maximo: </Text>
      <TextInput
       value={maximo}
        keyboardType="numeric"
        textAlign="center"
        autoFocus={true}
        maxLength={10}
        placeholder="Informe um numero"
        onFocus={() => {
          setFlagsInput(false);
          console.log("esta em foco");
        }}
        onBlur={() => {
          setFlagsInput(true);
          console.log("saio do foco");
        }}
        style={{
          marginTop: 15,
          width: 200,
          height: 50,
          borderWidth: lagsInput ? 0.5 : 2,
          borderColor: !lagsInput ? "#FF830B" : "#3a3838",
          borderRadius: 15,
        }}
      />
      <Pressable
        style={{
          width: 200,
          height: 48,
          textAligner: "center",
          borderRadius: 20,
          marginBottom: 12,
          backgroundColor: "#16adad",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
        onPress={alterarNumero}
      >
        <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>
          Botão persolalizado
        </Text>
      </Pressable>
      <Text
        style={{
          backgroundColor: "blue",
          width: 150,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 40,

          fontSize: 50,
        }}
      >
        {number}
      </Text>
    </View>
  );
};

export default SetimaPagina;
