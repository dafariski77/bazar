import { colors, fontFamily, fontSize } from "@/shared/themes";
import React, { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { AppPressable } from "./app-pressable";
import { AppText } from "./app-text";

interface AppButtonProps extends ComponentProps<typeof AppPressable> {
  children: React.ReactNode;
  variant?: "primary";
}

export function AppButton({
  children,
  style,
  variant = "primary",
  ...props
}: AppButtonProps) {
  return (
    <AppPressable style={[styles.default, styles[variant], style]} {...props}>
      <AppText
        color={colors.white}
        family={fontFamily.openSans.bold}
        size={fontSize.h6}
      >
        {children}
      </AppText>
    </AppPressable>
  );
}

const styles = StyleSheet.create({
  default: {
    paddingVertical: 16,
    borderRadius: 999,
    paddingHorizontal: 32,
    backgroundColor: colors.primary[500],
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: colors.primary[500],
  },
});
