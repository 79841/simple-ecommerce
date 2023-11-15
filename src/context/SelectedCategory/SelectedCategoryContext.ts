import { TCategory } from "@/types/Category";
import { createContext, useContext } from "react";

type TSelectedCategoryContext = {
  selectedCategory: TCategory | null;
  selectCategory: (category: TCategory) => void;
  deselectCategory: () => void;
};

export const SelectedCategoryContext = createContext<TSelectedCategoryContext>({
  selectedCategory: null,
  selectCategory(category: TCategory) {},
  deselectCategory() {},
});

export const useSelectedCategoryContext = () =>
  useContext(SelectedCategoryContext);
