import { FlatList, StyleSheet, View } from "react-native";
import { OrderHistoryCard } from "./order-history-card";

export function ListOrderHistory() {
  return (
    <FlatList
      data={[1, 2, 3, 4]}
      renderItem={() => <OrderHistoryCard />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 40,
  },
});
