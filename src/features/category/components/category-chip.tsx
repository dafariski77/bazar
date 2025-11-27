import { AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";

interface CategoryChipProps {
  title: string;
  isSelected: boolean;
  onPress?: VoidFunction;
}

export function CategoryChip({
  title,
  isSelected,
  onPress,
}: CategoryChipProps) {
  return (
    <AppPressable onPress={onPress}>
      <AppText
        family={
          isSelected ? fontFamily.openSans.bold : fontFamily.roboto.regular
        }
        size={isSelected ? fontSize.h5 : fontSize.lg}
        color={isSelected ? colors.grayScale[900] : colors.grayScale[500]}
        style={{
          textDecorationLine: isSelected ? "underline" : undefined,
        }}
      >
        {title}
      </AppText>
    </AppPressable>
  );
}
