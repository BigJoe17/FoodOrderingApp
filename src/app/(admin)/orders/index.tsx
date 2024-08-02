import OrderListItem from '@/components/OrderListItem';
import orders from '@assets/data/orders';
import { FlatList } from 'react-native';

export default function OrdersScreen() {
    return (
        <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
        />
    );

}