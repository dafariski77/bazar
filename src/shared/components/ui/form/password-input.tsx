import { colors } from "@/shared/themes";
import { Feather } from "@expo/vector-icons";
import { ComponentProps, useState } from "react";
import { AppTextInput } from "./text-input";

interface AppPasswordInputProps extends ComponentProps<typeof AppTextInput> {}

export function AppPasswordInput({ ...props }: AppPasswordInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <AppTextInput
      {...props}
      textContentType={"password"}
      secureTextEntry={!showPassword}
      autoCapitalize={"none"}
      rightIcon={
        <Feather
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color={colors.grayScale[400]}
          onPress={() => setShowPassword((prev) => !prev)}
        />
      }
    />
  );
}
