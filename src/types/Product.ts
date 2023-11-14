import { TCategory } from "./Category";
import { TProduction } from "./Production";

export type TProduct = {
  id: string;
  name: string;
  price: number;
  categoryId: TCategory;
  productionId: TProduction;
};
