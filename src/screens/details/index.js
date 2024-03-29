import React from "react";
import { View, Text, Image,  StyleSheet } from "react-native";
import {useRoute} from '@react-navigation/native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Details(){

    const route = useRoute();

return(

    <View style={styles.container}>
      <Image style={styles.image} source={require(`../../Img/${route.params.imagem}`)} />
  
      <Text style={styles.textAvaliacao}>Dê sua Avaliação</Text>
      
      <Stars // Estrelas de Avaliação
        default={2.5}
        count={5}
        half={true}
        starSize={50} 
        fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
        emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
        halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
      />
  
      <Text style={styles.textNome}>{route.params.nome}</Text>

      <Text style={styles.textIngredientes}>{route.params.ingredientes}</Text>

      <Text style={styles.textPreco}>{route.params.preco}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4A460",
    alignItems: "center",
  },
  textAvaliacao: { 
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: -50, 
    marginRight: -50, 
    textAlign: 'center'
  },
  textNome: { 
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: -50, 
    marginRight: -50, 
    textAlign: 'center'
  },
  textIngredientes: { 
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: -50, 
    marginRight: -50, 
    textAlign: 'center'
  },
  textPreco: { 
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop:20,
    marginLeft: -50, 
    marginRight: -50, 
    textAlign: 'center'
  },
  myStarStyle: {
    marginTop: 10,
    color: 'yellow',
    fontSize: 30,
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'black',
  },
  textNota: {
    fontSize: 25,
    color: 'fff',
    fontWeight: 'bold',
    marginRight: 75,
    textAlign: 'right'
  },
  textTitulo: {
    marginRight: 500,
    fontSize: 25,
    color: 'fff',
    fontWeight: 'bold',
    marginRight: 75,
    textAlign: 'right'
  },
  image: {
    width: '90%',
    height: 400,
    marginTop: 15,
    borderRadius: 10
  },
});