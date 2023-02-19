import React from "react";
import { View } from "react-native";
import styleEngloba from "./styleConteudo";

const Engloba = ({children}) => {
  return (
    <>
      <View style={styleEngloba.view}>
       {children}
      </View>
    </>
  );
};


export default Engloba;
