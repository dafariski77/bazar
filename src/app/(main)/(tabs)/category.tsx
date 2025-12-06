import { ListCategoryBook } from "@/features/category/components";
import { AppPressable, ScreenWrapper } from "@/shared/components/ui";
import { useAppHeader } from "@/shared/hooks";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  // const { search } = useLocalSearchParams<{ search?: string }>();

  useAppHeader({
    leftIcon: (
      <AppPressable
        onPress={() =>
          router.push({
            pathname: "/(main)/search",
            params: {
              returnTo: pathname,
            },
          })
        }
      >
        <Ionicons name="search" size={24} />
      </AppPressable>
    ),
    rightIcon: (
      <AppPressable>
        <Octicons name="bell" size={24} />
      </AppPressable>
    ),
    title: "Category",
  });

  return (
    <ScreenWrapper hasBottomTab scrollable={false}>
      <View style={styles.container}>
        <ListCategoryBook />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
