import { AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export function FavoriteItem() {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.sanity.io/images/p34gzxcg/production/7635c996b98d1762e7530fe157b599284de70123-750x1050.jpg?auto=format&w=500&fit=scale",
          }}
        />
        <View style={styles.bookInfoGroup}>
          <AppText numberOfLines={1} ellipsizeMode="tail" size={fontSize.lg}>
            No Longer Human
          </AppText>
          <AppText family={fontFamily.roboto.bold} color={colors.primary[500]}>
            $14.99
          </AppText>
        </View>
      </View>
      <Ionicons name="heart" size={26} color={colors.primary[500]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 10,
  },
  bookInfoGroup: {
    gap: 10,
  },
});
