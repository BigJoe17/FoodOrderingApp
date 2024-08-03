import OrderListItem from "@/components/OrderListItem";
import OrderItemListItem from "@/components/OrdersItemList";
import orders from "@assets/data/orders";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { OrderStatusList } from "@/types";

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 10,
    flex: 1,
  },
  statusButton: {
    borderColor: Colors.light.tint,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  statusButtonSelected: {
    backgroundColor: Colors.light.tint,
  },
  statusButtonText: {
    color: Colors.light.tint,
  },
  statusButtonTextSelected: {
    color: 'white',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id == parseInt(id));

  if (!order) {
    return <Text style={{ textAlign: 'center', marginTop: 20 }}>Order Not Found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${id}` }} />

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={() => <OrderListItem order={order} />}
        ListFooterComponent={() => (
          <>
            <Text style={styles.headerText}>Status</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              {OrderStatusList.map((status) => (
                <Pressable
                  key={status}
                  onPress={() => console.warn('Update status')}
                  style={[
                    styles.statusButton,
                    order.status === status && styles.statusButtonSelected,
                  ]}
                  accessibilityRole="button"
                  accessibilityLabel={`Change status to ${status}`}
                >
                  <Text
                    style={[
                      styles.statusButtonText,
                      order.status === status && styles.statusButtonTextSelected,
                    ]}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        )}
      />
    </View>
  );
}
