import { createCategory } from "@/actions/category";
import { Categories } from "@/components/category";
import CategoryAddForm from "@/components/category/CategoryAddForm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CategorySection = () => {
  // const handleSubmit = async (formData: FormData) => {
  //   "use server";
  //   const validatedProductName = z.string().safeParse(formData.get("name"));
  //   if (!validatedProductName.success) {
  //     return;
  //   }
  //   await createCategory(validatedProductName.data);
  //   revalidatePath("/admin");
  // };

  return (
    <div className="text-red-500">
      <CategoryAddForm />
      <Categories />
    </div>
  );
};

export default CategorySection;
