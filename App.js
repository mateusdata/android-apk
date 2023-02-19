import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import OnePage from "./src/pages/primeira pagina/onePage";
import Engloba from "./src/components/engloba/engloba";
import Images from "./src/components/images/images";
import SegundaPagina from "./src/pages/segunda pagina/segundaPagina";
import TerceiraPagina from "./src/pages/terceira pagina/terceiraPagina";
import QuartaPagina from "./src/pages/quarta pagina/quartaPagina";
import QuintaPagina from "./src/pages/quinta pagina/quintaPagina";
import SextaPagina from "./src/pages/sexta pagina/sextaPagina";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SetimaPagina from "./src/pages/setima pagina/setimaPagina";

const Abas = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator screenOptions={{
        tabBarActiveTintColor:"green", //aqui altera a cor quando o icone esta ativado
        tabBarActiveBackgroundColor:"orange", //aqui altera a cor de fundo quando o icone esta ativado
        tabBarLabelPosition:"below-icon"|| " beside-icon", //aqui é pra colocar o texto embaixo oudo lado do componete 
        //estilizar a barra de titulo
        headerShown: true || false, //aqui oculta ou mostra a  barra de titulo
        headerTitleAlign:"center",
        headerStyle:{
          backgroundColor:"yellow",
          height: 85
        },
        headerTitleStyle:{
          color:"blue",
          fontSize:30,
          fontWeight:"bold"
        },
        tabBarStyle:{ 
          backgroundColor:"#205067", //cor do fundo do menu das rotas
          height:100,
          marginButton:0,
          borderWidth:2,
          borderColor: "red",
        },
        tabBarLabelStyle:{ //altera o estilo do label ou texto
          borderWidth:2,
          borderColor: "#6b1f93",
          marginBottom: 20,
          fontSize:18,
          fontWeight: "bold",
        }
      }}>
        <Drawer.Screen
          name="Primeira pagina"
          component={OnePage}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={45} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Containes ImageBackground"
          component={SextaPagina}
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="container" size={45} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Containes ScrollView"
          component={QuartaPagina}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="scroll" size={45} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Containes pressable"
          component={QuintaPagina}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="gesture-tap-button"
                size={45}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Rota entre telas pelos botões"
          component={SegundaPagina}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="router" size={45} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Requisição chatdata"
          component={Images}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="image" size={45} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="OnTouchStart e OnTouchEnd"
          component={TerceiraPagina}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="gesture-tap-button"
                size={45}
                color={color}
              />
            ),
          }}
        />
         <Drawer.Screen
          name="Text input"
          component={SetimaPagina}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="gesture-tap-button"
                size={45}
                color={color}
              />
            ),
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
/*
 <Abas.Navigator>
        <Abas.Screen name="rota" component={Images}/>
        <Abas.Screen name="rota1" component={OnePage}/>
        <Abas.Screen name="rota2" component={Engloba}/>
        <Abas.Screen name="rota3" component={Images}/>
        </Abas.Navigator>
        chamar o componente dentri da barra lateral



// Stack navegation 

<Stack.Navigator>
      <Stack.Screen name="segunda Pagina" component={SegundaPagina} />
        <Stack.Screen name="imagens" component={Images} />
        <Stack.Screen name="OnsePage" component={OnePage} />
        <Stack.Screen name="Engloba" component={Engloba} />
      </Stack.Navigator> 
*/
