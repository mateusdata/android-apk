import React from "react";
import { Image, Text, View } from "react-native";

const TerceiraPagina = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 0.5,
          width: 250,
        }}
      >
        <Text
          style={{
            fontSize: 35,
          }}
        >
          OnTouchStart e OnTouchEnd
        </Text>
        <Text
          style={{
            fontSize: 25,
          }}
        >
          É acionado quando o usuario clica sobre um componente na tela
        </Text>
        <Text onTouchStart={() => {props.navigation.navigate('imagens')}} 
          style={{
            backgroundColor: "blue",
            fontSize: 25,
            color: "white",
          }}
        
        >
          Be-vindo clink nessa componente Text
        </Text>

        <Image 
         onTouchEnd={() => {props.navigation.navigate('segunda Pagina')}}
        style={{
           width: 250,
           marginTop:20,
           height:250
          }} source={{uri:"https://www.devmedia.com.br/arquivos/cursos/Navegation_RN/new_aula11/9.png"}}/>
           <Text
          style={{
            backgroundColor: "pink",
            fontSize: 25,
            color: "red",
          }}
        >
         Clik na imagem para ir pra rota inicial
        </Text>
      </View>
    </View>
  );
};

export default TerceiraPagina;
