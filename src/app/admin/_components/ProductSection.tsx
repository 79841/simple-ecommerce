import SelectedCategoryContextProvider from "@/context/SelectedCategory/SelectedCategoryContextProvider";
import SectionLayout from "./SectionLayout";
import { ProductAddForm, Products } from "@/components/product";

const ProductSection = () => {
  return (
    <SectionLayout title={"Product"}>
      <SelectedCategoryContextProvider>
        <ProductAddForm />
        <Products />
      </SelectedCategoryContextProvider>
    </SectionLayout>
  );
};

export default ProductSection;
