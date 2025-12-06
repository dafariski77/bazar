import { DetailAuthorView } from "@/features/authors/components";
import { ScreenWrapper } from "@/shared/components/ui";

export default function AuthorDetailScreen() {
  return (
    <ScreenWrapper scrollable={false}>
      <DetailAuthorView />
    </ScreenWrapper>
  );
}
