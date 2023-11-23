"use client";
import { deleteProduction } from "@/actions/production";
import { TProduction } from "@/types/Production";
import { z } from "zod";
import DeleteForm from "../shared/form/DeleteForm";
import { memo, useCallback } from "react";

type TProductionProps = {
  item: TProduction;
};
export const Production = memo(function Production({ item }: TProductionProps) {
  const formAction = useCallback(async (formData: FormData) => {
    const schema = z.object({
      id: z.string(),
    });
    const validatedData = schema.safeParse({
      id: formData.get("id"),
    });
    if (!validatedData.success) {
      return { message: "Wrong production name" };
    }
    try {
      await deleteProduction(validatedData.data.id);
      return { message: `Deleted production ${validatedData.data.id}` };
    } catch (e) {
      return { message: "Failed to delete production" };
    }
  }, []);

  return <DeleteForm formAction={formAction} item={item} />;
});
