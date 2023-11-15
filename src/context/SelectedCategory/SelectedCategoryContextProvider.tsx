"use client";
import { TCategory } from "@/types/Category";
import { PropsWithChildren, useState } from "react";
import { SelectedCategoryContext } from "./SelectedCategoryContext";

type TSelectedCategoryContextProviderProps = PropsWithChildren;
const SelectedCategoryContextProvider = ({
  children,
}: TSelectedCategoryContextProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<TCategory | null>(
    null
  );

  const selectCategory = (category: TCategory) => {
    if (category == null) return;
    setSelectedCategory(category);
  };

  const deselectCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, selectCategory, deselectCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export default SelectedCategoryContextProvider;
