
import React from "react";

import { Image, Text,TouchableOpacity} from "react-native";

import styles from "./style";
import { useNavigation } from "@react-navigation/core";

export default function CardEsfihas({nome,preco,avaliacao,imagem,ingredientes}) {


    const navigation = useNavigation()

  return (

    <TouchableOpacity onPress ={() => navigation.navigate('details' , {nome:nome , preco:preco, avaliacao:avaliacao, imagem:imagem, ingredientes:ingredientes})}  style = {styles.containerEsfihas}>

      <Image style = {styles.imagemEsfihas} source={require(`../../Img/${imagem}`)} />

      <Text style = {styles.nomeEsfihas}> {nome}</Text>

      <Text style = {styles.precoEsfihas}> {preco}</Text>

      <Text style = {styles.avaliacaoEsfihas}> {avaliacao}</Text>

      <Text style = {styles.ingredientesEsfihas}> {ingredientes}</Text>

    </TouchableOpacity>

  );

}






