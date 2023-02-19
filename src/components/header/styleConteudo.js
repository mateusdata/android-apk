import { StyleSheet } from "react-native";

const  styleHeader = StyleSheet.create({
    p: {
        fontSize: 36,
        color: "red",
        textAlign: "center",
        lineHeight: 50, // afasta a linha do texto
        letterSpacing: 5, // afasta entre as letras
        textTransform: "capitalize",
        textDecorationLine: "line-through", // cortar o texto usar em promoções em site
      },
})
export default  styleHeader;