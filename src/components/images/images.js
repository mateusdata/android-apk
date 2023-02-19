import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import styleImages from "./styleConteudo";
import Axios from "axios";
const Images = (props) => {
  const [arrayTalks, setArrayTalks] = useState([]);
  useEffect(() => {
    Axios.get("https://chat-data-api.vercel.app/").then((response) => {
      setArrayTalks(response.data);
     // alert(JSON.stringify(response.data));
    });
 
    // eslint-disable-next-line
  }, [arrayTalks]);

  function req() {
    Axios.get("https://chat-data-api.vercel.app/").then((response) => {
      setArrayTalks(response.data);
      console.log(response.data);
      alert(JSON.stringify(response.data));
    });
  }

  return (
    <>
      <View style={styleImages.view}>
        <Button title="Fazer requisição" onPress={req} />
        <Button title="Mudar  rota" onPress={()=> {props.navigation.openDrawer()}} />
        {arrayTalks.map((item)=>(
          <Text key={item.id}>{item.currentUser} +" " {item.talk}</Text>
        ))}
        <Image
          style={styleImages.imagem}
          source={{
            uri: "https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/imagens-da-lua-encantadoras.png?fit=1024%2C768&ssl=1",
          }}
        />
        <Image
          style={styleImages.imagem}
          source={{
            uri: "https://logodetimes.com/wp-content/uploads/sao-paulo.png",
          }}
        />
        <Image
          style={styleImages.imagem}
          source={{
            uri: "https://64.media.tumblr.com/8e596237d30381d0e65d5dbb16ce9e67/tumblr_paowhpFJS41ql734to1_500.jpg",
          }}
        />
      </View>
    </>
  );
};

export default Images;
