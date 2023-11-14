import { getCategories } from "@/actions/category";

export const Categories = async () => {
  const categories = await getCategories();
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};
