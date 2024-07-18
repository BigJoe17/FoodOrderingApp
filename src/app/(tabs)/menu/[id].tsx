import { defaultPizzaImage } from "@/components/ProductListItem";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from "react";
import Button from "@/components/Button";
import { ScrollView } from "react-native";

const ProductDetailScreen = () => {
const addToCart = ()=>{
  console.warn("Add to cart:", selectedSize);
}

  const [selectedSize, setSelectedSize] = useState("L");

  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() == id);

  if (!product) {
    return <Text style={styles.notFound}>Product not found</Text>;
  }

  const sizes = ["S", "M", "L", "XL"];

  return (
    <ScrollView>



    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.details}>
        <Text style={styles.name}>{product?.name}</Text>
        <Text style={styles.price}>Price: {product?.price}</Text>
        <View style={styles.sizeSelection}>
          <Text style={styles.sizeLabel}>Select Size</Text>
          <View style={styles.sizes}>
            {sizes.map((size) => (
              <Pressable
                key={size}
                onPress={() => setSelectedSize(size)}
                style={[
                  styles.size,
                  {
                    backgroundColor:
                      selectedSize == size ? "lightgray" : "white",
                  },
                ]}
                accessibilityLabel={`Select ${size} size`}
                accessibilityState={{ selected: selectedSize === size }}
              >
                <Text
                  style={{
                    color: selectedSize == size ? "black" : "gray",
                  }}
                >
                  {size}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Button onPress ={addToCart} text="add to cart"/>
        <View>
          <Text style={styles.name}>Description</Text>
          <Text style={{ fontSize: 16 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            debitis quasi quas at error aperiam iste mollitia quos corporis
            reprehenderit quo itaque voluptatibus ab saepe quibusdam, obcaecati
            ratione deleniti esse?
          </Text>
        </View>
      </View>
    </View>
</ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  details: {
    alignItems: "center",
    marginTop: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: "#888",
    marginTop: 8,
  },
  sizeSelection: {
    alignSelf: "flex-start",
    padding: 5,
    marginTop: 16,
  },
  sizeLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  size: {
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    fontWeight: "500",
    borderColor: "#ccc",
    borderWidth: 1,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 5,
    flex: 1,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "red",
  },
});
