import { StyleSheet } from "react-native";

const styleConteudo = StyleSheet.create({
    p: {
        fontSize: 36,
        color: "red",
        textAlign: "center",
        lineHeight: 50, // afasta a linha do texto
        letterSpacing: 5, // afasta entre as letras
        textTransform: "capitalize",
        textDecorationLine: "line-through", // cortar o texto usar em promoções em site
      },
      containerFilho: {
        marginTop: 20,
        borderWidth: 4,
        flex: 0.5,
        flex: 0.98,
        borderWidth: 8,
        borderStyle: "solid",
        borderTopColor: "pink",
        borderLeftColor: "red",
        borderBottomColor: "pink",
        borderRightColor: "green",
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#ffff",
        
      },
})
export default styleConteudo;