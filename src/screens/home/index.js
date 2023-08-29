import { StyleSheet, Text, View, FlatList } from "react-native";

import BannerPizza from "../../components/bannerPizzas";

import Pizzas from "../../data/pizzas"

import Header from "../../components/header";

import SearchBar from "../../components/searchbar";

import CardPizzas from "../../components/bannerPizzas";

import CardItens from "../../components/cardEsfirras/index"

import Esfirras from "../../data/esfirras"
import CardEsfirras from "../../components/cardEsfirras/index";



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

        data={Pizzas}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

    

        

        <CardEsfirras

        

        nome= {item.nome}

        avaliacao = {item.avaliacao}

        preco = {item.preco}

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
                     textAlign:'center'}}> Esfirras</Text>


      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Esfirras}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardItens

        
        nome= {item.nome}

        avaliacao = {item.avaliacao}

        preco = {item.preco}

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

    backgroundColor: "#F4A460",

    alignItems: "center",

  },

});