"use client";
import { deleteProduct } from "@/actions/product";
import { TProduct } from "@/types/Product";
import { z } from "zod";
import DeleteForm from "../shared/form/DeleteForm";
import { memo, useCallback } from "react";

type TProductProps = {
  item: TProduct;
};

export const Product = memo(function Product({ item }: TProductProps) {
  const formAction = useCallback(async (formData: FormData) => {
    const schema = z.object({
      id: z.string().min(1),
    });
    const validatedData = schema.safeParse({
      id: formData.get("id"),
    });
    if (!validatedData.success) {
      return { message: "Wrong product id" };
    }
    try {
      await deleteProduct(validatedData.data.id);
      return { message: `Deleted product ${validatedData.data.id}` };
    } catch (e) {
      return { mesage: "Falied to delete product" };
    }
  }, []);

  return <DeleteForm formAction={formAction} item={item} />;
});
