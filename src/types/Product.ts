import { TCategory } from "./Category";
import { TProduction } from "./Production";

export type TProduct = {
  id: string;
  name: string;
  price: number;
  categoryId: TCategory["id"];
  productionId: TProduction["id"];
};

export type TCreateProduct = Omit<TProduct, "id">;
