import { ListCategoryChip } from "@/features/category/components";
import { FlatList, StyleSheet } from "react-native";
import { AuthorListItem } from "./author-list-item";

export function ListAuthor() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
      renderItem={() => <AuthorListItem />}
      ListHeaderComponent={<ListCategoryChip />}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    rowGap: 30,
    paddingBottom: 20,
  },
});
