import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

// Ensure the Product type is correctly imported from your types file
import { Product } from '../types';

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';


const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
      <Text style={styles.myTitle}>{product.name}</Text>
      <Text style={styles.price}>Price: {product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10, // Added for spacing between items
    shadowColor: '#000', // Added for better visual
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10, // Added to match container's border radius
  },
  myTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10, // Added for spacing between elements
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5, // Added for spacing between elements
  },
});
