import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack'
import OnePage from "./src/pages/primeira pagina/onePage";
import Engloba from "./src/components/engloba/engloba";
import Images from "./src/components/images/images";
import SegundaPagina from "./src/pages/segunda pagina/segundaPagina";


const Abas = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack =  createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="segunda Pagina" component={SegundaPagina} />
        <Drawer.Screen name="imagens" component={Images} />
        <Drawer.Screen name="OnsePage" component={OnePage} />
        <Drawer.Screen name="Engloba" component={Engloba} />
        <Drawer.Screen name="OnTouchStart e OnTouchEnd" component={Engloba} />
       
      </Drawer.Navigator> 
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
