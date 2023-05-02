import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";


export default function CardSeries({titulo,nota,imagem}) {
  return (
    <TouchableOpacity style = {styles.containerSeries}>
      <Image style = {styles.imagemSeries} source={require(`../../Img/${imagem}`)} />
      <Text style = {styles.tituloSeries}> {titulo}</Text>
      <Text style = {styles.notaSeries}>{nota}</Text>
    </TouchableOpacity>
  );
}
