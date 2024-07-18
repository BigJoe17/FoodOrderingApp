import { StyleSheet } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import { FlatList } from "react-native";
export default function MenuScreen() {
  return(

<FlatList
  data ={products}
  renderItem ={({item})=> <ProductListItem product={item}/>}
  numColumns={2}
  contentContainerStyle = {{gap:12 , padding:15}}
  columnWrapperStyle ={{ gap: 10 }}

/>
 
  )
  
  

}

