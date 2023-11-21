import { TProduct } from "@/types/Product";

type TProductProps = {
  product: TProduct;
};
export const Product = ({ product }: TProductProps) => {
  return <div>{product.name}</div>;
};
