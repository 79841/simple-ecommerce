import { ProductionAddForm, Productions } from "@/components/production";
import SectionLayout from "./SectionLayout";

const ProductionSection = () => {
  return (
    <SectionLayout title={"Production"}>
      <ProductionAddForm />
      <Productions />
    </SectionLayout>
  );
};

export default ProductionSection;
