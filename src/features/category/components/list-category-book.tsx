import { DetailBookSheet } from "@/features/book/components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { FlatList } from "react-native";
import { CategoryBookCard } from "./category-book-card";
import { ListCategoryChip } from "./list-category-chip";

export function ListCategoryBook() {
  const detailBookSheetRef = useRef<BottomSheetModal>(null);

  const openDetailSheet = useCallback(() => {
    detailBookSheetRef.current?.present();
  }, []);

  return (
    <>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={() => <CategoryBookCard onPress={openDetailSheet} />}
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
      <DetailBookSheet ref={detailBookSheetRef} />
    </>
  );
}
