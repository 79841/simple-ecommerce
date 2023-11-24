import {
  TSelectedItem,
  useSelectedItemContext,
} from "@/context/SelectedItemContext";
import { MouseEventHandler, memo } from "react";

type TSearchedItemProps = {
  item: TSelectedItem;
};
const SearchedItem = memo(function SearchedItem({ item }: TSearchedItemProps) {
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
      className={`${theme.backgroundColor} ${theme.textColor} rounded-md border-2 border-solid border-black p-1`}
      onClick={handleClick}
    >
      {item.name}
    </div>
  );
});

export default SearchedItem;
