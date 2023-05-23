import { StyleSheet, Text, View, FlatList } from "react-native";
import BannerPizzas from "./src/components/bannerPizzas";
import Pizzas from "./src/data/pizzas";
import Series from "./src/data/Esfirras";
import Header from "./src/components/header";
import SearchBar from "./src/components/searchbar";
import CardPizzas from "./src/components/cardPizzas";
import CardSeries from "./src/components/cardEsfirras";
import CardEsfirras from "./src/components/cardEsfirras";



export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerPizzas></BannerPizzas>

      <View style={{width:"90%"}}>
      <Text style = {{fontSize:25,

                    color: 'white',

                    fontWeight:'bold',

                     marginRight: 75,

                     textAlign:'center'}}>Pizzas</Text>
      <FlatList
      horizontal ={true}
      showsHorizontalScrollIndicator={false}
        data={Pizzas}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => (
        
        <CardPizzas
        
        titulo = {item.nome}
        preco = {item.preco}
        avaliacao={item.avaliacao}
        imagem = {item.imagem}

        />
        )}
      />
<Text style = {{fontSize:25,

                    color: 'white',

                    fontWeight:'bold',

                     marginRight: 75,

                     textAlign:'center'}}>Esfirras </Text>
<FlatList
      horizontal ={true}
      showsHorizontalScrollIndicator={false}
        data={Series}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => (
        
        <CardEsfirras
        
        titulo = {item.nome}
        preco = {item.preco}
        avaliacao={item.avaliacao}
        imagem = {item.imagem}
       

        />
        )}
      />


      </View>

      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
  },
  
});

