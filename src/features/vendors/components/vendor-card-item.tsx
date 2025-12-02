import { AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontSize } from "@/shared/themes";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export function VendorCardItem() {
  return (
    <AppPressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://siplah.blibli.com/data/images/SGVB-0002-00404/d6fcb09b-b71a-4a80-a767-50f54b7c2b08.jpg",
          }}
          contentFit="contain"
          contentPosition={"center"}
          style={styles.image}
        />
      </View>
      <AppText size={fontSize.lg}>Gramedia</AppText>
      <View style={styles.ratingContainer}>
        {[...Array(4)].map((_, i) => (
          <AntDesign key={i} name="star" size={16} color={colors.yellow} />
        ))}
        <AntDesign name="star" size={16} color={colors.grayScale[900]} />
      </View>
    </AppPressable>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: colors.grayScale[50],
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 80,
  },
  container: {
    width: "31%",
    gap: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
