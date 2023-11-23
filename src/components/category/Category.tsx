"use client";
import { deleteCategory } from "@/actions/category";
import { TCategory } from "@/types/Category";
import { z } from "zod";
import DeleteForm from "../shared/form/DeleteForm";
import { memo, useCallback } from "react";

type TCategoryProps = {
  item: TCategory;
};

export const Category = memo(function Category({ item }: TCategoryProps) {
  const formAction = useCallback(async (formData: FormData) => {
    const schema = z.object({
      id: z.string().min(1),
    });
    const validatedData = schema.safeParse({
      id: formData.get("id"),
    });
    if (!validatedData.success) {
      return { message: "Wrong category id" };
    }
    try {
      await deleteCategory(validatedData.data.id);
      return { message: `Deleted category ${validatedData.data.id}` };
    } catch (e) {
      return { message: "Failed to delete category" };
    }
  }, []);

  return <DeleteForm formAction={formAction} item={item} />;
});
