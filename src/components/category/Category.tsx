"use client";
import { deleteCategory } from "@/actions/category";
import { TCategory } from "@/types/Category";
import { useFormState, useFormStatus } from "react-dom";
import { z } from "zod";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="text-red-500 disabled:text-gray-400"
      type="submit"
      disabled={pending}
    >
      X
    </button>
  );
};

type TCategoryProps = { category: TCategory };

export const Category = ({ category }: TCategoryProps) => {
  const handleAction = async (prevState: any, formData: FormData) => {
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
  };

  const [state, formAction] = useFormState(handleAction, null);

  return (
    <div className="flex">
      <div className="mr-2 mb-1">{category.name}</div>
      <form action={formAction}>
        <input type="hidden" name="id" value={category.id} />
        <DeleteButton />
      </form>
      <div>{state?.message}</div>
    </div>
  );
};
