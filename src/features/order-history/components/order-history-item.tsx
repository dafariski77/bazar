import { AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export function OrderHistoryItem() {
  return (
    <View style={styles.container}>
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
        <View style={styles.bookStatus}>
          <AppText family={fontFamily.roboto.bold} color={colors.green}>
            Delivered
          </AppText>
          <Entypo name="dot-single" size={24} color={colors.grayScale[200]} />
          <AppText
            family={fontFamily.roboto.bold}
            color={colors.grayScale[600]}
          >
            1 items
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 10,
  },
  bookInfoGroup: {
    gap: 10,
  },
  bookStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
