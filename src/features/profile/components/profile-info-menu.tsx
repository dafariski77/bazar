import { AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export function ProfileInfoMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftInfo}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osamu_Dazai.jpg/250px-Osamu_Dazai.jpg",
            }}
            style={styles.userAvatar}
          />
          <View style={styles.userInfo}>
            <AppText family={fontFamily.openSans.bold} size={fontSize.h6}>
              John Doe
            </AppText>
            <AppText
              family={fontFamily.roboto.regular}
              size={fontSize.md}
              color={colors.grayScale[500]}
            >
              +6285413526182
            </AppText>
          </View>
        </View>
        <AppPressable>
          <AppText family={fontFamily.roboto.bold} color={colors.red}>
            Logout
          </AppText>
        </AppPressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grayScale[200],
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  leftInfo: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
  userInfo: {
    flexDirection: "column",
    gap: 4,
  },
});
