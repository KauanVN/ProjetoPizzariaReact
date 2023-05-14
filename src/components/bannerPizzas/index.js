import React,{Fragment} from "react";
import {Image, Text} from 'react-native';
import styles from "./style";



export default function BannerPizzas(){

    const imagem = Math.floor(Math.random() * 10 +1);

    return(

        
        <>
            <Text style = {styles.textBanner}> Recomendação </Text>

            <Image style = {styles.imageBanner} source = {require(`../../Img/${imagem}.jpg`)}/>
        </>


    );
}
