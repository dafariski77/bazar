import { ListCategoryChip } from "@/features/category/components";
import { FlatList, StyleSheet } from "react-native";
import { VendorCardItem } from "./vendor-card-item";

export function ListVendor() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
      renderItem={() => <VendorCardItem />}
      numColumns={3}
      ListHeaderComponent={<ListCategoryChip />}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    gap: "5%",
  },
  contentContainer: {
    rowGap: 20,
    paddingBottom: 20,
  },
});
