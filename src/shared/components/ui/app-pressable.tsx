import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

interface AppPressableProps extends Omit<PressableProps, "style"> {
  style?: StyleProp<ViewStyle>;
}

export function AppPressable({ style, ...props }: AppPressableProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1,
        },
        style,
      ]}
      {...props}
    />
  );
}
