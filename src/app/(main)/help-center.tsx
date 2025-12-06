import {
  HelpCenterHeader,
  HelpCenterList,
} from "@/features/help-center/components";
import { HeaderBack, ScreenWrapper } from "@/shared/components/ui";
import { useAppHeader } from "@/shared/hooks";
import { colors } from "@/shared/themes";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function HelpCenterScreen() {
  useAppHeader({
    style: {
      backgroundColor: colors.primary[500],
    },
    leftIcon: <HeaderBack color={colors.white} />,
  });

  return (
    <ScreenWrapper contentStyle={styles.container} scrollable={false}>
      <HelpCenterHeader />
      <HelpCenterList />
      <StatusBar style="light" />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
