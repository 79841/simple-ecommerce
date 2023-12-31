import { TSelectedItem } from "@/context/SelectedItemContext";
import SearchedItem from "./SearchedItem";
import { memo } from "react";

type TSearchedListProps = {
  items: TSelectedItem[];
};
const SearchedList = memo(function SearchedList({ items }: TSearchedListProps) {
  return (
    <div className="m-2 mb-4 mt-4 flex flex-wrap justify-center gap-2">
      {items.map((item) => {
        return <SearchedItem key={item.id} item={item} />;
      })}
    </div>
  );
});

export default SearchedList;
