import { TSelectedItem } from "@/context/SelectedItemContext";
import SearchedItem from "./SearchedItem";

type TSearchedListProps = {
  items: TSelectedItem[];
};
const SearchedList = ({ items }: TSearchedListProps) => {
  return (
    <div className="flex flex-wrap gap-2 m-2 mt-4 mb-4">
      {items.map((item) => {
        return <SearchedItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default SearchedList;
