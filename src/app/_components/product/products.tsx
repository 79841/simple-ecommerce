import { Product } from "./Product";
import { getProducts } from "@/actions/product";

export const Products = async () => {
  const products = await getProducts();
  return (
    <div className="w-[30rem]">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
