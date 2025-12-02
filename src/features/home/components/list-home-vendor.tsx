import { AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Link } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import { HomeVendorCard } from "./home-vendor-card";

export function ListHomeVendor() {
  return (
    <View>
      <View style={styles.title}>
        <AppText size={fontSize.h5} family={fontFamily.openSans.bold}>
          Best Vendors
        </AppText>
        <Link href={"/vendors"}>
          <AppText family={fontFamily.roboto.bold} color={colors.primary[500]}>
            See all
          </AppText>
        </Link>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => <HomeVendorCard />}
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
    gap: 12,
  },
});
