import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useState,
} from "react";
import { TSelectedItem } from "@/context/SelectedItemContext/SelectedItemContext";
import { SelectedItemContextProvider } from "@/context/SelectedItemContext";
import SearchedList from "./SearchedList";
import RoundInputBox from "../shared/input/RoundInputBox";

type TSearchProps = {
  searchAction: (keyword: string) => Promise<TSelectedItem[]>;
  selectedItem: TSelectedItem | null;
  setSelectedItem: Dispatch<SetStateAction<TSelectedItem | null>>;
};
const Search = memo(function Search({
  searchAction,
  selectedItem,
  setSelectedItem,
}: TSearchProps) {
  const [items, setItems] = useState<TSelectedItem[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    async ({ target }) => {
      const { value } = target;
      if (value.length < 1) {
        setItems([]);
        return;
      }
      const items = await searchAction(value);
      setItems(items);
    },
    [searchAction],
  );

  return (
    <SelectedItemContextProvider
      selectedItem={selectedItem}
      setSelecetItem={setSelectedItem}
    >
      <div className="flex flex-col items-center">
        <RoundInputBox onChange={handleChange} type="text" name="keyword" />
        <SearchedList items={items} />
      </div>
    </SelectedItemContextProvider>
  );
});

export default Search;
