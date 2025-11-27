import { colors, fontFamily, fontSize } from "@/shared/themes";
import type { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText } from "../app-text";
import { HeaderBack } from "./header-back";

export function AppHeader({
  options,
}: NativeStackHeaderProps | BottomTabHeaderProps) {
  const { top } = useSafeAreaInsets();
  const title = options.title;
  const router = useNavigation();

  return (
    <View
      style={[
        styles.container,
        options.headerStyle as ViewStyle,
        {
          marginTop: top,
        },
      ]}
    >
      <View style={styles.leftContainer}>
        {options.headerLeft ? options.headerLeft({}) : <HeaderBack />}
      </View>

      <View style={styles.centerContainer}>
        {title && (
          <AppText family={fontFamily.openSans.bold} size={fontSize.h4}>
            {title}
          </AppText>
        )}
      </View>
      <View style={styles.rightContainer}>
        {options.headerRight &&
          options.headerRight({
            canGoBack: router.canGoBack(),
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    zIndex: 900,
    padding: 20,
  },
  leftContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  rightContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
