import { ListAuthor } from "@/features/authors/components";
import { AppPressable, ScreenWrapper } from "@/shared/components/ui";
import { useAppHeader } from "@/shared/hooks";
import { Ionicons } from "@expo/vector-icons";

export default function AuthorListScreen() {
  useAppHeader({
    rightIcon: (
      <AppPressable>
        <Ionicons name="search" size={24} />
      </AppPressable>
    ),
  });

  return (
    <ScreenWrapper scrollable={false}>
      <ListAuthor />
    </ScreenWrapper>
  );
}
