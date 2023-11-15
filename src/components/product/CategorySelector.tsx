import { useSelectedCategoryContext } from "@/context/SelectedCategory";
import { TCategory } from "@/types/Category";

type TCategorySelectorProps = {
  item: TCategory;
};

const CategorySelector = ({ item }: TCategorySelectorProps) => {
  const { selectedCategory, selectCategory, deselectCategory } =
    useSelectedCategoryContext();

  const handleClick = () => {
    if (selectedCategory != null && selectedCategory.id === item.id) {
      deselectCategory();
    } else {
      selectCategory(item);
    }
  };

  const { backgroundColor, textColor } =
    selectedCategory != null && selectedCategory.id === item.id
      ? { backgroundColor: "bg-black", textColor: "text-white" }
      : { backgroundColor: "bg-white", textColor: "text-black" };

  return (
    <div
      className={`border-black border-2 border-solid rounded-md p-1 ${backgroundColor} ${textColor}`}
      onClick={handleClick}
    >
      {item.name}
    </div>
  );
};

export default CategorySelector;
