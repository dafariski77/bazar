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
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

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
          Sign to your account
        </AppText>
      </View>
      <View style={styles.formContainer}>
        <FormField label="Email">
          <AppTextInput placeholder="Your Email" />
        </FormField>
        <FormField label="Password">
          <AppPasswordInput placeholder="Your Password" />
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

      <AppButton onPress={() => router.push("/home")}>Login</AppButton>

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
