import { AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { StyleSheet, View } from "react-native";

export function HelpCenterHeader() {
  return (
    <View style={styles.container}>
      <AppText
        color={colors.white}
        style={styles.title}
        size={fontSize.h3}
        family={fontFamily.openSans.bold}
      >
        Help Center
      </AppText>
      <AppText
        style={styles.description}
        family={fontFamily.roboto.regular}
        color={colors.primary[200]}
        size={fontSize.lg}
      >
        {
          "Tell us how we can help 👋\nChapter are standing by for service & support!"
        }
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary[500],
    paddingHorizontal: 30,
    paddingBottom: 40,
    gap: 12,
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    lineHeight: 26,
  },
});
