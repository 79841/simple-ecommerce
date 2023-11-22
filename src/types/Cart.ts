import { TProduct } from "./Product";

export type TCart = Record<
  TProduct["id"],
  { count: number; product: TProduct }
>;
