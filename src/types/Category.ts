export type TCategory = {
  id: string;
  name: string;
};

export type TCreateCategory = Omit<TCategory, "id">;
