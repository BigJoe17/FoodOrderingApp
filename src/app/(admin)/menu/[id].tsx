import { defaultPizzaImage } from "@/components/ProductListItem";
import products from "@assets/data/products";
import { CartItem, PizzaSize } from "@/types";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import Button from "@/components/Button";
import { ScrollView } from "react-native";
import { useCart } from "@/providers/CartProvider";
import { useRouter, Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];
const ProductDetailScreen = () => {
const {addItem} = useCart();
const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("L");

  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() == id);

 
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <Stack>

      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
            <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-square-o"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
        />
        </Stack>
        <Image
          source={{ uri: product?.image ?? defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />

        <View>
          <Text style={styles.name}>{product?.name}</Text>
          <Text style={styles.price}>Price: {product?.price}</Text>
          <View style={styles.sizeSelection}>
            
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
