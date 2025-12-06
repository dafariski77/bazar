import { AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import { HomeAuthorCard } from "./home-author-card";

export function ListHomeAuthor() {
  const router = useRouter();

  return (
    <View>
      <View style={styles.title}>
        <AppText size={fontSize.h5} family={fontFamily.openSans.bold}>
          Authors
        </AppText>
        <AppPressable onPress={() => router.push("/(main)/authors")}>
          <AppText family={fontFamily.roboto.bold} color={colors.primary[500]}>
            See all
          </AppText>
        </AppPressable>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => <HomeAuthorCard />}
          horizontal
          contentContainerStyle={styles.listContentContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    gap: 14,
    marginTop: 10,
  },
  listContentContainer: {
    gap: 24,
  },
});
