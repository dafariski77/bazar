import { AuthProvider } from "@/features/auth/providers";
import { AppLayout } from "@/shared/components/layouts";
import { colors } from "@/shared/themes";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontLoader, QueryProvider } from "../shared/providers";

export default function RootLayout() {
  return (
    <FontLoader>
      <AuthProvider>
        <QueryProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <SafeAreaProvider>
                <AppLayout />
                <StatusBar backgroundColor={colors.white} />
              </SafeAreaProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </QueryProvider>
      </AuthProvider>
    </FontLoader>
  );
}
