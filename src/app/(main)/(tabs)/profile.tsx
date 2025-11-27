import { ListProfileMenu } from "@/features/profile/components";
import { ScreenWrapper } from "@/shared/components/ui";
import { useAppHeader } from "@/shared/hooks";

export default function Index() {
  useAppHeader({
    leftIcon: <></>,
    title: "Profile",
  });

  return (
    <ScreenWrapper hasBottomTab>
      <ListProfileMenu />
    </ScreenWrapper>
  );
}
