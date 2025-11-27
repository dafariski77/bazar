import { colors } from "@/shared/themes";
import { FlatList, StyleSheet, View } from "react-native";
import { FavoriteItem } from "./favorite-item";

export function ListFavoriteBooks() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      renderItem={() => (
        <View style={styles.itemContainer}>
          <FavoriteItem />
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
  },
  separator: {
    height: 1.2,
    width: "100%",
    marginVertical: 18,
    backgroundColor: colors.grayScale[200],
  },
});
