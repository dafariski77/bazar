import { colors } from "@/shared/themes";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { AppPressable } from "../app-pressable";

interface HeaderBackProps {
  color?: string;
}

export function HeaderBack({ color = colors.grayScale[900] }: HeaderBackProps) {
  const router = useNavigation();
  const canGoBack = router.canGoBack();

  const onPress = canGoBack ? () => router.goBack() : undefined;

  return (
    <AppPressable onPress={onPress}>
      <Octicons name="arrow-left" size={28} color={color} />
    </AppPressable>
  );
}
