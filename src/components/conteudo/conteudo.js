import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Images from "../images/images";
import styleConteudo from "./styleConteudo";

const Conteudo = () => {
  return (
    <View style={styleConteudo.containerFilho}>
      <Text style={styleConteudo.p}>Primeiro texto</Text>
      <Text style={styleConteudo.p}>Primeiro</Text>
      <StatusBar style="auto" />
      <Images />
    </View>
  );
};

export default Conteudo;
