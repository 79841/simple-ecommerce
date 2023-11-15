export type TProduction = {
  id: string;
  name: string;
};
export type TCreateProduction = Omit<TProduction, "id">;
