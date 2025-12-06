import { DetailBookSheet } from "@/features/book/components";
import { CategoryBookCard } from "@/features/category/components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { FlatList } from "react-native";
import { DetailAuthorHeader } from "./detail-author-header";

export function DetailAuthorView() {
  const detailBookSheetRef = useRef<BottomSheetModal>(null);

  const openDetailSheet = useCallback(() => {
    detailBookSheetRef.current?.present();
  }, []);

  return (
    <>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        numColumns={2}
        renderItem={() => <CategoryBookCard onPress={openDetailSheet} />}
        ListHeaderComponent={<DetailAuthorHeader />}
        columnWrapperStyle={{
          marginTop: 20,
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
      <DetailBookSheet ref={detailBookSheetRef} />
    </>
  );
}
