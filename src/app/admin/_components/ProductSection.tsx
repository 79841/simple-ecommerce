import SectionLayout from "./SectionLayout";
import { ProductAddForm, Products } from "@/components/product";

const ProductSection = () => {
  return (
    <SectionLayout title={"Product"}>
      <ProductAddForm />
      <Products />
    </SectionLayout>
  );
};

export default ProductSection;
