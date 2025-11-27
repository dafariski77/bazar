import { colors } from "@/shared/themes";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  hasHeader?: boolean;
  hasBottomTab?: boolean;
  scrollable?: boolean;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

export function ScreenWrapper({
  hasHeader = true,
  hasBottomTab = false,
  scrollable = true,
  children,
  containerStyle,
  contentStyle,
}: ScreenWrapperProps) {
  // Build edges dynamically
  const edges: ("top" | "bottom" | "left" | "right")[] = ["left", "right"];

  if (!hasHeader) {
    edges.push("top");
  }

  if (!hasBottomTab) {
    edges.push("bottom");
  }

  return (
    <SafeAreaView style={[styles.container, containerStyle]} edges={edges}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {scrollable ? (
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={[styles.contentContainer, contentStyle]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.contentContainer, contentStyle]}>
            {children}
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20,
  },
});
