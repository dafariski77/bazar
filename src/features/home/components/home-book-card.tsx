import { AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function HomeBookCard() {
  return (
    <AppPressable style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.sanity.io/images/p34gzxcg/production/7635c996b98d1762e7530fe157b599284de70123-750x1050.jpg?auto=format&w=500&fit=scale",
        }}
        style={styles.image}
      />
      <AppText numberOfLines={1} ellipsizeMode="tail" size={fontSize.lg}>
        No Longer Human
      </AppText>
      <AppText family={fontFamily.roboto.bold} color={colors.primary[500]}>
        $14.99
      </AppText>
    </AppPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    gap: 10,
  },
  image: {
    borderRadius: 12,
    width: "100%",
    height: 180,
  },
});
