import { useRouter } from "expo-router";
import { View } from "react-native";
import { AppButton, ScreenWrapper } from "../shared/components/ui";

export default function Index() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          gap: 20,
        }}
      >
        <AppButton onPress={() => router.push("/(auth)/login")}>
          Login
        </AppButton>
        <AppButton onPress={() => router.push("/(auth)/register")}>
          Register
        </AppButton>
        <AppButton onPress={() => router.push("/(main)/(tabs)/home")}>
          Home
        </AppButton>
      </View>
    </ScreenWrapper>
  );
}
