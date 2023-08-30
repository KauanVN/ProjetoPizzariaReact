import { StyleSheet, Text, View, FlatList } from "react-native";

import BannerPizza from "../../components/bannerPizzas";

import Pizzas from "../../data/pizzas"

import Header from "../../components/header";

import SearchBar from "../../components/searchbar";

import CardPizzas from "../../components/bannerPizzas";

import CardItens from "../../components/cardEsfihas/index"

import Esfihas from "../../data/esfihas"
import CardEsfihas from "../../components/cardEsfihas/index";



export default function App() {

  return (

    <View style={styles.container}>

      <Header></Header>

      <SearchBar></SearchBar>

      <BannerPizza></BannerPizza>




      <View style={{width:"90%"}}>

        <Text style = {{fontSize:30,
                color: 'white',
                fontWeight:'bold',
                marginLeft:-180,
                marginRight:-180,
                textAlign:'center'}}> Pizzas</Text>

      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Pizzas}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

    

        

        <CardEsfihas

        

        nome= {item.nome}

        avaliacao = {item.avaliacao}

        preco = {item.preco}

        imagem = {item.imagem}

        ingredientes = {item.ingredientes}



        />


        )}

      />

      </View>

      <View style={{width:"90%"}}>

      <Text style = {{fontSize:30,
                    color: 'white',
                    fontWeight:'bold',
                    marginLeft:-180,
                     marginRight:-180,
                     textAlign:'center'}}> Esfihas</Text>

      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Esfihas}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardItens

        
        nome= {item.nome}

        avaliacao = {item.avaliacao}

        preco = {item.preco}

        imagem = {item.imagem}

        ingredientes = {item.ingredientes}


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