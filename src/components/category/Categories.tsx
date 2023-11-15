import { getCategories } from "@/actions/category";
import { Category } from "./Category";

export const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="w-[70%]">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Category item={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};
