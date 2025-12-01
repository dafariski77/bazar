import { DetailBookSheet } from "@/features/book/components";
import { AppText } from "@/shared/components/ui";
import { fontFamily, fontSize } from "@/shared/themes";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HomeBookCard } from "./home-book-card";

export function ListHomeBook() {
  const detailProductSheetRef = useRef<BottomSheetModal>(null);

  const openDetailSheet = useCallback(() => {
    detailProductSheetRef.current?.present();
  }, []);

  return (
    <View>
      <AppText size={fontSize.h5} family={fontFamily.openSans.bold}>
        Top of Week
      </AppText>

      <View style={styles.listContainer}>
        <FlatList
          horizontal
          data={[1, 2, 3, 4]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <HomeBookCard onPress={openDetailSheet} />}
          contentContainerStyle={styles.listContent}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <DetailBookSheet ref={detailProductSheetRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: { marginTop: 10 },
  listContent: { gap: 12 },
});
