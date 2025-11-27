import { AppText } from "@/shared/components/ui";
import { fontFamily, fontSize } from "@/shared/themes";
import { FlatList, StyleSheet, View } from "react-native";
import { HomeBookCard } from "./home-book-card";

export function ListHomeBook() {
  return (
    <View>
      <AppText size={fontSize.h5} family={fontFamily.openSans.bold}>
        Top of Week
      </AppText>
      <View style={styles.listContainer}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => <HomeBookCard />}
          horizontal
          contentContainerStyle={styles.listContentContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    gap: 14,
    marginTop: 10,
  },
  listContentContainer: {
    gap: 12,
  },
});
