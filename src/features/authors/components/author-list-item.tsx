import { AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export function AuthorListItem() {
  const router = useRouter();

  return (
    <AppPressable
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: "/(main)/authors/[id]",
          params: {
            id: "test",
          },
        })
      }
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osamu_Dazai.jpg/250px-Osamu_Dazai.jpg",
        }}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <AppText family={fontFamily.openSans.bold} size={fontSize.h5}>
          Dazai Osamu
        </AppText>
        <AppText
          numberOfLines={2}
          lineBreakMode="tail"
          color={colors.grayScale[600]}
          family={fontFamily.roboto.regular}
          style={styles.description}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          doloremque corporis exercitationem.
        </AppText>
      </View>
    </AppPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 999,
  },
  textContainer: {
    gap: 4,
  },
  description: {
    lineHeight: 22,
  },
});
