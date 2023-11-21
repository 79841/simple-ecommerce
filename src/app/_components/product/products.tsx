import { TProduct } from "@/types/Product";
import { Product } from "./product";

type TProductsProps = {
  products: TProduct[];
};
export const Products = ({ products }: TProductsProps) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
