import { AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export function DetailAuthorHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.authorDetail}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osamu_Dazai.jpg/250px-Osamu_Dazai.jpg",
          }}
          style={styles.avatar}
        />
        <AppText family={fontFamily.openSans.regular} size={fontSize.lg}>
          Writter
        </AppText>
        <AppText family={fontFamily.openSans.bold} size={fontSize.h4}>
          Author Name
        </AppText>
        <View style={styles.ratingContainer}>
          {[...Array(4)].map((_, i) => (
            <AntDesign key={i} name="star" size={26} color={colors.yellow} />
          ))}
          <AntDesign name="star" size={26} color={colors.grayScale[900]} />
          <AppText>(4.0)</AppText>
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <AppText family={fontFamily.openSans.bold} size={fontSize.xl}>
          About
        </AppText>
        <AppText
          family={fontFamily.openSans.regular}
          size={fontSize.lg}
          color={colors.grayScale[600]}
          style={styles.aboutDescription}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci
          ipsa optio asperiores consectetur ut eius laudantium vel voluptatum
          eveniet!
        </AppText>
      </View>
      <AppText family={fontFamily.openSans.bold} size={fontSize.xl}>
        Products
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  authorDetail: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 999,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
    alignItems: "center",
  },
  aboutContainer: {
    gap: 4,
  },
  aboutDescription: {
    textAlign: "justify",
    lineHeight: 24,
  },
});
