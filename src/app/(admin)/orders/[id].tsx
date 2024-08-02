import OrderListItem from "@/components/OrderListItem";
import OrderItemListItem from "@/components/OrdersItemList";
import orders from "@assets/data/orders";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();

  const order = orders.find((o) => o.id == parseInt(id));

  if (!order) {
    return <Text>Order Not Found</Text>;
  }

  const styles = StyleSheet.create({
    container: {
      gap: 20,
      padding: 10,
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `order #${id}` }} />

    

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={() => <OrderListItem order={order} />}
      />
    </View>
  );
}
