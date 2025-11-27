import { AppHeader } from "@/shared/components/ui";
import { colors } from "@/shared/themes";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontLoader } from "../shared/providers";

export default function RootLayout() {
  return (
    <FontLoader>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            header: (props) => <AppHeader {...props} />,
          }}
          initialRouteName="(main)"
        >
          <Stack.Screen name="index" />
          <Stack.Screen
            name="(main)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="(auth)/login" />
          <Stack.Screen name="(auth)/register" />
        </Stack>
        <StatusBar backgroundColor={colors.white} />
      </SafeAreaProvider>
    </FontLoader>
  );
}
