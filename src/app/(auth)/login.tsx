import { useLogin } from "@/features/auth/hooks";
import { loginSchema } from "@/features/auth/schemas";
import { LoginSchemaType } from "@/features/auth/types";
import {
  AppButton,
  AppPasswordInput,
  AppPressable,
  AppText,
  AppTextInput,
  FormField,
  ScreenWrapper,
} from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isPending, mutate } = useLogin();

  const handleSubmit = (data: LoginSchemaType) => {
    console.log("data", data);
    mutate(data, {
      onSuccess: (response) => {
        console.log("success", response);
      },
      onError: (error) => {
        console.log("error", error);
      },
    });
  };

  return (
    <ScreenWrapper>
      <View style={styles.title}>
        <AppText size={fontSize.h3} family={fontFamily.openSans.bold}>
          Welcome Back
        </AppText>
        <AppText
          size={fontSize.lg}
          family={fontFamily.roboto.regular}
          color={colors.grayScale[500]}
        >
          Sign to your accounts
        </AppText>
      </View>
      <View style={styles.formContainer}>
        <FormField label="Email">
          <Controller
            control={form.control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <AppTextInput
                placeholder="Your Email"
                value={value}
                onChangeText={onChange}
                autoCapitalize={"none"}
                textContentType="emailAddress"
              />
            )}
          />
        </FormField>
        <FormField label="Password">
          <Controller
            control={form.control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <AppPasswordInput
                placeholder="Your Password"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </FormField>
      </View>

      <AppPressable>
        <AppText
          family={fontFamily.roboto.semibold}
          size={fontSize.md}
          color={colors.primary[500]}
        >
          Forgot Password?
        </AppText>
      </AppPressable>

      <AppButton onPress={form.handleSubmit(handleSubmit)} disabled={isPending}>
        Login
      </AppButton>

      <View style={styles.authInfo}>
        <AppText color={colors.grayScale[500]} size={fontSize.lg}>
          Don&apos;t have an account?
        </AppText>
        <AppPressable onPress={() => router.replace("/(auth)/register")}>
          <AppText color={colors.primary[500]} size={fontSize.lg}>
            Sign Up
          </AppText>
        </AppPressable>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    gap: 8,
  },
  formContainer: {
    gap: 20,
    marginTop: 16,
  },
  authInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
});
