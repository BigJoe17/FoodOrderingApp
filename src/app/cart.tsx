import React from 'react';
import { View, Text, Platform, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '@/providers/CartProvider';
import Button from '@/components/Button';

import CartListItem from '../components/CartListItem';


const CartScreen: React.FC = () => {
  const {items, total} = useCart();



  return (
    <View style= {{padding:10}} >
     <FlatList
        data={items}
        renderItem={({item}) => <CartListItem cartItem={item} />}
       contentContainerStyle={{gap: 10}}
    />
    <Text style={styles.total}>Total: ${total}</Text>

      <Button text="check out"/>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  ); 
}



const styles = StyleSheet.create({
   total:{
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:20
    },
   
   
  
});
export default CartScreen;