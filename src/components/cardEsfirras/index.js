
import React from "react";

import { Image, Text,TouchableOpacity} from "react-native";

import styles from "./style";
import { useNavigation } from "@react-navigation/core";

export default function CardEsfirras({nome,imagem,avaliacao,preco}) {


    const navigation = useNavigation()

  return (

    <TouchableOpacity onPress ={() => navigation.navigate('details' , {nome:nome , imagem:imagem, avaliacao:avaliacao, preco:preco})} style = {styles.containerEsfirras}>

      <Image style = {styles.imagemEsfirras} source={require(`../../Img/${imagem}`)} />

      <Text style = {styles.nomeEsfirras}> {nome}</Text>

<Text style = {styles.precoEsfirras}> {preco}</Text>

  <Text style = {styles.avaliacaoEsfirras}> {imagem}</Text>

   
    </TouchableOpacity>

  );

}






