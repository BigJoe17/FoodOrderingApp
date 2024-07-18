import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";


const ProductDetailScreen = () => {
  const {id } = useLocalSearchParams()

    return(
        <View style={styles.container}>
          <Text>Welcome to details Page: {id} </Text>
        </View>
      

    );
}
export default ProductDetailScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      flex: 1,
      alignItems: "center",
  }  },
)