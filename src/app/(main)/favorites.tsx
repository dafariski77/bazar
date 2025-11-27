import { ListFavoriteBooks } from "@/features/favorites/components";
import { ScreenWrapper } from "@/shared/components/ui";
import { StyleSheet } from "react-native";

export default function Favorites() {
  return (
    <ScreenWrapper scrollable={false} contentStyle={style.container}>
      <ListFavoriteBooks />
    </ScreenWrapper>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
});
