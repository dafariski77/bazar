import { StyleSheet, View, ViewProps } from "react-native";
import { AppText } from "../app-text";

interface FormFieldProps extends ViewProps {
  label?: string;
}

export function FormField({
  label,
  children,
  style,
  ...props
}: FormFieldProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      <AppText>{label}</AppText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
});
