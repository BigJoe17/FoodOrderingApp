import { StyleSheet } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
export default function MenuScreen() {
  return<>

<FlatList
  data ={products}
  renderItem ={({item })=> <ProductListItem product={item}/>}

/>
  <ProductListItem product={products[0]}/>
  <ProductListItem product={products[1]}/>



  
  
  </>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },

});