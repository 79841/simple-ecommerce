import { ChangeEventHandler, PropsWithChildren, useState } from "react";
import { TCategory } from "@/types/Category";
import { TProduction } from "@/types/Production";

type TSearchProps = {
  searchAction: (keyword: string) => Promise<TCategory[] | TProduction[]>;
  Selector: ({
    children,
    item,
  }: PropsWithChildren & { item: TCategory | TProduction }) => JSX.Element;
};
const Search = ({ searchAction, Selector }: TSearchProps) => {
  const [items, setItems] = useState<TCategory[] | TProduction[]>([]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = async ({
    target,
  }) => {
    const { value } = target;
    if (value.length < 1) return;
    const items = await searchAction(value);
    setItems(items);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        className="border-black border-2 border-solid h-8 rounded-md "
        type="text"
        name="keyword"
      />
      <div className="flex flex-wrap gap-2 mt-4 mb-4">
        {items.map((item) => {
          return (
            <Selector key={item.id} item={item}>
              {item.name}
            </Selector>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
