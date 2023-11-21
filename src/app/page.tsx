import { getProducts } from "@/actions/product";
import { Products } from "./_components/product";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <Products products={products} />
    </div>
  );
}
