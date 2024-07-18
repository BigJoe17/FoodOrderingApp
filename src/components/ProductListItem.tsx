import React from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";

// Ensure the Product type is correctly imported from your types file
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.myTitle}>{product.name}</Text>
        <Text style={styles.price}>Price: {product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    maxWidth: "50%",
  },

  details: {
    borderBlockColor: "red",
    padding: 5,
    borderBottomColor: "crimson",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "crimson",
    color: "white",
    fontSize: 20,
  },

  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10, // Added to match container's border radius
  },
  myTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
    marginTop: 10, // Added for spacing between elements
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5, // Added for spacing between elements
  },
});
