import { Categories } from "@/components/category";
import { CategoryAddForm } from "@/components/category/CategoryAddForm";
import SectionLayout from "./SectionLayout";

const CategorySection = () => {
  return (
    <SectionLayout title={"Category"}>
      <CategoryAddForm />
      <Categories />
    </SectionLayout>
  );
};

export default CategorySection;
