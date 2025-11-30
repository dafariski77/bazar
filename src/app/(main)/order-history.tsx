import { ListOrderHistory } from "@/features/order-history/components";
import { ScreenWrapper } from "@/shared/components/ui";

export default function OrderHistoryScreen() {
  return (
    <ScreenWrapper scrollable={false}>
      <ListOrderHistory />
    </ScreenWrapper>
  );
}
