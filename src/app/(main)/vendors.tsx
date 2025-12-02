import { ListVendor } from "@/features/vendors/components";
import { AppPressable, ScreenWrapper } from "@/shared/components/ui";
import { useAppHeader } from "@/shared/hooks";
import { Ionicons } from "@expo/vector-icons";

export default function Vendors() {
  useAppHeader({
    rightIcon: (
      <AppPressable>
        <Ionicons name="search" size={24} />
      </AppPressable>
    ),
  });

  return (
    <ScreenWrapper scrollable={false}>
      <ListVendor />
    </ScreenWrapper>
  );
}
