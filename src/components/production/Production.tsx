"use client";
import { deleteProduction } from "@/actions/production";
import { TProduction } from "@/types/Production";
import { z } from "zod";
import DeleteButton from "../shared/button/DeleteButton";

type TProductionProps = {
  item: TProduction;
};
export const Production = ({ item }: TProductionProps) => {
  const formAction = async (formData: FormData) => {
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
  };
  return (
    <div className="flex">
      <div className="mr-2 mb-1">{item.name}</div>
      <form action={formAction}>
        <input type="hidden" name="id" value={item.id} />
        <DeleteButton />
      </form>
    </div>
  );
};
