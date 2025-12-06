import {
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

interface FontLoaderProps {
  children: React.ReactNode;
}

SplashScreen.preventAutoHideAsync();

export function FontLoader({ children }: FontLoaderProps) {
  const [loaded, error] = useFonts({
    OpenSansBold: OpenSans_700Bold,
    OpenSansRegular: OpenSans_400Regular,
    RobotoRegular: Roboto_400Regular,
    RobotoMedium: Roboto_500Medium,
    RobotoSemibold: Roboto_600SemiBold,
    RobotoBold: Roboto_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return children;
}
