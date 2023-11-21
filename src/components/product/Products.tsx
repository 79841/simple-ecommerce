import { getProducts } from "@/actions/product";
import { Product } from ".";

export const Products = async () => {
  const products = await getProducts();
  return (
    <div className="w-[70%]">
      <ul>
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
    </div>
  );
};
