import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import Conteudo from "../../../src/components/conteudo/conteudo";
import Engloba from "../../../src/components/engloba/engloba";
import Header from "../../../src/components/header/header";

const OnePage = () => {
  return (
    <View style={style.text}>
      <ScrollView>
        <Header />
        <Engloba>
          <Conteudo />
        </Engloba>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    flex: 1,
  },
});
{
  /*// borderColor
borderColor: '#313131',
borderTopColor: '#ff00ff',
borderBottomColor: '#0d5d5d5',
borderLeftColor: '#a00',
borderRightColor: '#550',

// borderWidth
borderWidth: 5,
borderTopWidth: 40,
borderBottomWidth: 50,
borderLeftWidth: 30,
borderRightWidth: 20,

// borderRadius
borderRadius: 20,
borderTopLeftRadius:10,
borderTopRightRadius:30,
borderTopLeftRadius:50,
borderTopRightRadius:70,

// borderStyle
borderStyle: "solid", // padrão
borderStyle: "dotted",
borderStyle: "dashed",*/
}
export default OnePage;
