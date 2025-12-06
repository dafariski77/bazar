import { AppTextInput, ScreenWrapper } from "@/shared/components/ui";
import {
  RelativePathString,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { useState } from "react";

export default function SearchModal() {
  const [value, setValue] = useState<string>();
  const { returnTo } = useLocalSearchParams<{ returnTo?: string }>();
  const router = useRouter();
  const navigation = useNavigation();

  const submitSearch = () => {
    if (!returnTo) {
      navigation.goBack();
      return;
    }

    navigation.goBack();

    router.replace({
      pathname: returnTo as RelativePathString,
      params: {
        search: value,
      },
    });
  };

  return (
    <ScreenWrapper>
      <AppTextInput
        placeholder="Enter keyword..."
        autoFocus
        returnKeyType="search"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={submitSearch}
      />
    </ScreenWrapper>
  );
}
