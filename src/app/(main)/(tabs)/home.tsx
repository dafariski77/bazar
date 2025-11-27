import {
  ListHomeAuthor,
  ListHomeBanner,
  ListHomeBook,
  ListHomeVendor,
} from "@/features/home/components";
import { AppPressable, ScreenWrapper } from "@/shared/components/ui";
import { useAppHeader } from "@/shared/hooks";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function Index() {
  useAppHeader({
    leftIcon: (
      <AppPressable>
        <Ionicons name="search" size={24} />
      </AppPressable>
    ),
    rightIcon: (
      <AppPressable>
        <Octicons name="bell" size={24} />
      </AppPressable>
    ),
    title: "Home",
  });

  return (
    <ScreenWrapper hasBottomTab>
      <View style={styles.container}>
        <ListHomeBanner />
        <ListHomeBook />
        <ListHomeVendor />
        <ListHomeAuthor />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
});
