import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { SelectedItemContext, TSelectedItem } from "./SelectedItemContext";

type TSelectedItemContextProviderProps = PropsWithChildren & {
  selectedItem: TSelectedItem | null;
  setSelecetItem: Dispatch<SetStateAction<TSelectedItem | null>>;
};

export const SelectedItemContextProvider = ({
  children,
  selectedItem,
  setSelecetItem,
}: TSelectedItemContextProviderProps) => {
  const value = {
    selectedItem,

    selectItem(item: TSelectedItem) {
      setSelecetItem(item);
    },

    deselectItem() {
      setSelecetItem(null);
    },
  };

  return (
    <SelectedItemContext.Provider value={value}>
      {children}
    </SelectedItemContext.Provider>
  );
};
