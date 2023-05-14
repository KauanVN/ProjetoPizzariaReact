import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";


export default function CardPizzas({titulo,preco,imagem}) {
  return (
    <TouchableOpacity style = {styles.containerPizzas}>
      <Image style = {styles.imagemPizzas} source={require(`../../Img/${imagem}`)} />
      <Text style = {styles.tituloPizzas}> {titulo}</Text>
      <Text style = {styles.precoPizzas}>{preco}</Text>
    </TouchableOpacity>
  );
}
