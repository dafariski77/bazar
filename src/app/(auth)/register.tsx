import { useRegister } from "@/features/auth/hooks";
import { registerSchema } from "@/features/auth/schemas";
import { RegisterSchemaType } from "@/features/auth/types";
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
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { isPending, mutate } = useRegister();

  const handleSubmit = (data: RegisterSchemaType) => {
    console.log("irenf", data);

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
      <View
        style={{
          flex: 1,
          gap: 20,
        }}
      >
        <View style={styles.title}>
          <AppText size={fontSize.h3} family={fontFamily.openSans.bold}>
            Sign Up
          </AppText>
          <AppText
            size={fontSize.lg}
            family={fontFamily.roboto.regular}
            color={colors.grayScale[500]}
          >
            Create account and choose favorite menu
          </AppText>
        </View>
        <View style={styles.formContainer}>
          <FormField label="Name">
            <Controller
              control={form.control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <AppTextInput
                  placeholder="Your Name"
                  value={value}
                  onChangeText={onChange}
                  autoCapitalize={"none"}
                />
              )}
            />
          </FormField>
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

        <AppButton
          onPress={form.handleSubmit(handleSubmit)}
          disabled={isPending}
        >
          Register
        </AppButton>

        <View style={styles.authInfo}>
          <AppText color={colors.grayScale[500]} size={fontSize.lg}>
            Have an account?
          </AppText>
          <AppPressable onPress={() => router.replace("/(auth)/login")}>
            <AppText color={colors.primary[500]} size={fontSize.lg}>
              Sign In
            </AppText>
          </AppPressable>
        </View>
      </View>
      <AppText>{JSON.stringify(form.formState.errors)}</AppText>
      <AppText>{JSON.stringify(form.getValues("email"))}</AppText>
      <View style={styles.termsInfo}>
        <AppText color={colors.grayScale[500]}>
          By clicking Register, you agree to our
        </AppText>
        <AppPressable onPress={() => router.replace("/(auth)/login")}>
          <AppText color={colors.primary[500]}>Terms and Data Policy.</AppText>
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
  },
  authInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  termsInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
