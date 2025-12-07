import { AppHeader } from "@/shared/components/ui";
import { colors } from "@/shared/themes";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontLoader, QueryProvider } from "../shared/providers";

export default function RootLayout() {
  return (
    <FontLoader>
      <QueryProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <SafeAreaProvider>
              <Stack
                screenOptions={{
                  header: (props) => <AppHeader {...props} />,
                }}
                initialRouteName="(main)"
              >
                <Stack.Screen
                  name="index"
                  options={{
                    headerShown: false,
                  }}
                />
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
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </QueryProvider>
    </FontLoader>
  );
}
