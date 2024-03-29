
import React from "react";

import { Image, Text,TouchableOpacity} from "react-native";

import styles from "./style";
import { useNavigation } from "@react-navigation/core";

export default function CardPizzas({nome,imagem,avaliacao,preco,ingredientes}) {


    const navigation = useNavigation()

  return (

    <TouchableOpacity onPress ={() => navigation.navigate('details' , {nome:nome , preco:preco, avaliacao:avaliacao, imagem:imagem, ingredientes:ingredientes})} style = {styles.containerPizzas}>

      <Image style = {styles.imagemPizzas} source={require(`../../Img/${imagem}`)} />

      <Text style = {styles.nomePizzas}> {nome}</Text>

      <Text style = {styles.precoPizzas}> {preco}</Text>

      <Text style = {styles.avaliacaoPizzas}> {avaliacao}</Text>

      <Text style = {styles.ingredientesPizzas}> {ingredientes}</Text>

   
    </TouchableOpacity>

  );

}






