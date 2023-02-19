import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";

const SextaPagina = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ImageBackground
        blurRadius={5}
        resizeMode={"cover"}
        style={{ width: 385, flex: 1 }}
        source={{
          uri: "https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png",
        }}
      >
        <Text style={{ fontSize: 28, color:"white"}}>
          Esse é um exemplo de imagem Background no react native as propriedades
          são blurRadius={10} desfogo na imagem ex:blurRadius={10}
          blurRadius={20}
          blurRadius={40}
          resizeMode="cover" resizeMode="contain" resizeMode="stretch"
          resizeMode="repeat" resizeMode="center"
        </Text>
      </ImageBackground>
    </View>
  );
};

export default SextaPagina;
