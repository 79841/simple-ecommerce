import { getCategories } from "@/actions/category";
import { Category } from "./Category";

export const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="w-[70%]">
      <ul>
        {categories.map((category) => (
            <Category key={category.id} item={category} />
        ))}
      </ul>
    </div>
  );
};
