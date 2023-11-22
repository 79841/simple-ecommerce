import { TCategory } from "./Category";
import { TProduction } from "./Production";

export type TProduct = {
  id: string;
  name: string;
  price: number;
  categoryId: TCategory["id"];
  productionId: TProduction["id"];
  category: TCategory;
  production: TProduction;
};

export type TCreateProduct = Omit<TProduct, "id" | "category" | "production">;
