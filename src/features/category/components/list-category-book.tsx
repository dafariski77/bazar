import { FlatList } from "react-native";
import { CategoryBookCard } from "./category-book-card";
import { ListCategoryChip } from "./list-category-chip";

export function ListCategoryBook() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8]}
      renderItem={() => <CategoryBookCard />}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        gap: 10,
      }}
      contentContainerStyle={{
        rowGap: 20,
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <ListCategoryChip />}
    />
  );
}
