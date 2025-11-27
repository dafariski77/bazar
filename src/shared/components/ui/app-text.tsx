import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Text, TextProps } from "react-native";

interface AppTextProps extends TextProps {
  family?: string;
  size?: number;
  color?: string;
}

export function AppText({
  family = fontFamily.roboto.medium,
  size = fontSize.md,
  style,
  color = colors.grayScale[900],
  ...props
}: AppTextProps) {
  return (
    <Text
      style={[
        {
          fontFamily: family,
          fontSize: size,
          color,
        },
      ]}
      {...props}
    />
  );
}
