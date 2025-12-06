import { AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontFamily } from "@/shared/themes";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface HelpCenterCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  onPress?: VoidFunction;
}

export function HelpCenterCard({
  icon,
  title,
  description,
  onPress,
}: HelpCenterCardProps) {
  return (
    <AppPressable style={styles.container} onPress={onPress}>
      <View style={styles.icon}>{icon}</View>
      <View style={styles.infoContainer}>
        <AppText>{title}</AppText>
        <AppText
          family={fontFamily.roboto.regular}
          color={colors.grayScale[500]}
        >
          {description}
        </AppText>
      </View>
    </AppPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayScale[50],
    borderWidth: 1,
    borderColor: colors.grayScale[100],
    borderRadius: 14,
    padding: 18,
    gap: 18,
    width: "48%",
  },
  icon: {
    backgroundColor: colors.white,
    borderRadius: 999,
    padding: 8,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    gap: 4,
  },
});
