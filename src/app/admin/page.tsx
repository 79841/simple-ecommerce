import CategorySection from "./_components/CategorySection";
import ProductionSection from "./_components/ProductionSection";
import ProductSection from "./_components/ProductSection";

export default function Admin() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[70%] w-[90%] 2xl:w-[80%] flex flex-wrap justify-evenly items-start lg:w-[90%]">
        <CategorySection />
        <ProductionSection />
        <ProductSection />
      </div>
    </div>
  );
}
