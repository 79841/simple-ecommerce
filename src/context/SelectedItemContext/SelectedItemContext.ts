import { createContext, useContext } from "react";

export type TSelectedItem = { id: string; name: string };
type TSelectedItemContext = {
  selectedItem: TSelectedItem | null;
  selectItem: (item: TSelectedItem) => void;
  deselectItem: () => void;
};

export const SelectedItemContext = createContext<TSelectedItemContext>({
  selectedItem: null,
  selectItem(item: TSelectedItem) {},
  deselectItem() {},
});

export const useSelectedItemContext = () => useContext(SelectedItemContext);
