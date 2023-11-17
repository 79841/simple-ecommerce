import {
  TSelectedItem,
  useSelectedItemContext,
} from "@/context/SelectedItemContext";
import { MouseEventHandler } from "react";

type TSearchedItemProps = {
  item: TSelectedItem;
};
const SearchedItem = ({ item }: TSearchedItemProps) => {
  const { selectedItem, selectItem, deselectItem } = useSelectedItemContext();
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (selectedItem != null && selectedItem.id == item.id) {
      deselectItem();
    } else {
      selectItem(item);
    }
  };
  const isSelected = selectedItem != null && selectedItem.id == item.id;
  const theme = {
    backgroundColor: isSelected ? "bg-black" : "bg-white",
    textColor: isSelected ? "text-white" : "text-black",
  };
  return (
    <div
      className={`${theme.backgroundColor} ${theme.textColor} border-black border-2 border-solid rounded-md p-1`}
      onClick={handleClick}
    >
      {item.name}
    </div>
  );
};

export default SearchedItem;
