import { AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function HomeAuthorCard() {
  return (
    <AppPressable style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osamu_Dazai.jpg/250px-Osamu_Dazai.jpg",
        }}
        style={styles.image}
      />
      <AppText numberOfLines={1} ellipsizeMode="tail" size={fontSize.lg}>
        Dazai Osamu
      </AppText>
      <AppText family={fontFamily.roboto.regular} color={colors.grayScale[500]}>
        Writer
      </AppText>
    </AppPressable>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 999,
    width: "100%",
    height: 120,
  },
  container: {
    width: 120,
    gap: 10,
  },
});
