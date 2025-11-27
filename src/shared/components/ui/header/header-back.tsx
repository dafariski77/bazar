import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { AppPressable } from "../app-pressable";

export function HeaderBack() {
  const router = useNavigation();
  const canGoBack = router.canGoBack();

  const onPress = canGoBack ? () => router.goBack() : undefined;

  return (
    <AppPressable onPress={onPress}>
      <Octicons name="arrow-left" size={28} />
    </AppPressable>
  );
}
