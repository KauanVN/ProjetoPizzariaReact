import React, {Fragment} from "react"
import { Image, Text } from "react-native"
import styles from "./style";

export default function BannerPizzas () {

    const imagem = Math.floor(Math.random() * 20 +1);
    return (

    <>
    
        <Text style = {styles.textBanner}> Em Destaque </Text>

        <Image style = {styles.imageBanner} source = {require(`../../Img/${imagem}.jpg`)} />
    
    
    
    
    
    </>


    );
} 