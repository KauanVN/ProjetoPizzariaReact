import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";


export default function cardEsfirras({titulo,preco,imagem,avaliacao}) {
  return (
    <TouchableOpacity style = {styles.containerEsfirras}>
    <Image style = {styles.imagemEsfirras} source={require(`../../Img/${imagem}`)} />
    <Text style = {styles.tituloEsfirras}> {titulo}</Text>
    <Text style = {styles.precoEsfirras}>{preco}</Text>
    <Text style = {styles.avaliacaoEsfirras}>{avaliacao}</Text>
  </TouchableOpacity>
  );
}
