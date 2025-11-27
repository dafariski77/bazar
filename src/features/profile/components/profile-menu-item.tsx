import { AppText } from "@/shared/components/ui";
import { colors, fontSize } from "@/shared/themes";
import { Ionicons } from "@expo/vector-icons";
import { RelativePathString, useRouter } from "expo-router";
import { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface ProfileMenuItemProps {
  title: string;
  icon: ReactNode;
  href: string;
}

export function ProfileMenuItem({ href, icon, title }: ProfileMenuItemProps) {
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.grayScale[50] : colors.white,
        },
        styles.container,
      ]}
      onPress={() => router.push(href as RelativePathString)}
    >
      <View style={styles.content}>
        <View style={styles.leftContent}>{icon}</View>
        <AppText size={fontSize.lg}>{title}</AppText>
      </View>
      <Ionicons
        name="chevron-forward"
        size={26}
        color={colors.grayScale[500]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  leftContent: {
    width: 52,
    height: 52,
    backgroundColor: colors.primary[50],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
});
