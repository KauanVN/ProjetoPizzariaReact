import { StyleSheet, Text, View, FlatList } from "react-native";

import BannerPizza from "../../components/bannerPizzas";

import pizzas from "../../data/pizzas"

import Header from "../../components/header";

import SearchBar from "../../components/searchbar";

import CardPizzas from "../../components/bannerPizzas";

import CardItens from "../../components/cardEsfirras/index"

import Series from "../../data/pizzas"



export default function App() {

  return (

    <View style={styles.container}>

      <Header></Header>

      <SearchBar></SearchBar>

      <BannerPizza></BannerPizza>




      <View style={{width:"90%"}}>

      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Filmes}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        

        <CardPizzas

        

        titulo = {item.nome}

        nota = {item.nota}

        imagem = {item.imagem}

        />

        )}

      />

      </View>

      <View style={{width:"90%"}}>

      <Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     marginRight: 75,
                     textAlign:'center'}}> Series</Text>


      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Series}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardItens

        

        titulo = {item.nome}

        nota = {item.nota}

        imagem = {item.imagem}

        />

        )}

      />

      </View>


    </View>

  );

}




const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#141a29",

    alignItems: "center",

  },

});