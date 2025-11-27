import { ScrollView } from "react-native";
import { CategoryChip } from "./category-chip";

const dummyCategories = [
  {
    title: "All",
    isSelected: true,
  },
  {
    title: "Comedy",
    isSelected: false,
  },
  {
    title: "Fantasy",
    isSelected: false,
  },
  {
    title: "Action",
    isSelected: false,
  },
  {
    title: "Horror",
    isSelected: false,
  },
  {
    title: "Sci-fi",
    isSelected: false,
  },
  {
    title: "Romance",
    isSelected: false,
  },
  {
    title: "Technology",
    isSelected: false,
  },
];

export function ListCategoryChip() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        alignItems: "center",
        gap: 20,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {dummyCategories.map((item, index) => (
        <CategoryChip
          isSelected={item.isSelected}
          title={item.title}
          key={index}
        />
      ))}
    </ScrollView>
  );
}
