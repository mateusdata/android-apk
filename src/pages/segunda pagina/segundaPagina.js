import react from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import Engloba from "../../components/engloba/engloba";

const SegundaPagina = (props) => {
  return (
    <View style={style.text}>
      <Header />
      <Engloba>
        <Text style={{ fontSize: 40 }}>Rotas entre telas</Text>
        <View>
          <Button style={style.button} onPress={()=> props.navigation.navigate("imagens")} title="Rotas de images" />
          <Button style={style.button} onPress={()=> props.navigation.navigate("Engloba")} title="Rotas de engloba" />
          <Button style={style.button} onPress={()=> props.navigation.navigate("OnsePage")} title="Rotas de Onpage" />
        </View>
      </Engloba>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    flex: 1,
    marginBottom: 10,
  },
  button: {
    margin: 10,
    
  },
});
export default SegundaPagina;
