import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: "Details " + id }} />

      <Text style={{ fontSize: 20 }}>Welcome to details Page: {id} </Text>
    </View>
  );
};
export default ProductDetailScreen;

