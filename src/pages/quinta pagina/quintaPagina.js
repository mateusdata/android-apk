import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const QuintaPagina = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Pressable style={{ flex: 0.3, borderWidth: 2, borderColor: "red" }}>
        <Text>
          O container presable permite criar, por exemplo um botão que possui
          texto e um icone
        </Text>
        <Image
          onTouchStart={() => {
            props.navigation.navigate("Containes ScrollView");
          }}
          style={{ width: 100, height: 100 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5974/5974636.png",
          }}
        />
        <Text>Criando bot~´es persolalizados com o pressable</Text>
        <Text>
          {" "}
          O componente Pressable cria botões personalizados como, por exemplo,
          botões arredondados, com ícones etc.
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: 100,
          height: 48,
          textAligner: "center",
          borderRadius: 20,
         
          backgroundColor: "#16adad",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:15
        }}
        onPress={() => alert("Esse é um botão personalizado!")}
      >
        <Text style={{ textAlign: "center", color:"white"}}>Botão persolalizado</Text>
      </Pressable>
      <Pressable
        style={{
          width: 170,
          height: 68,
          textAligner: "center",
          borderRadius: 20,
         
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => alert("Esse é um botão personalizado!")}
      >
        <Text style={{ textAlign: "center", color:"white", fontSize:50}}>Sobre</Text>
      </Pressable>
    </View>
  );
};

export default QuintaPagina;
