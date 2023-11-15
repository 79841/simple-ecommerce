"use client";
import { createCategory } from "@/actions/category";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { z } from "zod";

export const CategoryAddForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const handleAction = async (prevState: any, formData: FormData) => {
    const schema = z.object({
      name: z.string().min(1),
    });
    const validatedData = schema.safeParse({
      name: formData.get("name"),
    });

    if (!validatedData.success) {
      return { message: "Wrong category name" };
    }
    try {
      await createCategory(validatedData.data);
      ref.current?.reset();
      return { message: `Added category ${validatedData.data.name}` };
    } catch (e) {
      return { message: "Failed to create category" };
    }
  };

  const [state, formAction] = useFormState(handleAction, null);

  return (
    <div className="flex flex-col items-center">
      <form ref={ref} action={formAction}>
        <input
          className="border-black border-2 border-solid h-8 rounded-md mr-4"
          type="text"
          name="name"
        />
        <button
          type="submit"
          className="border-black border-2 border-solid h-8 rounded-md w-16"
        >
          Add
        </button>
      </form>
      <div className="text-red-500 m-2">{state?.message}</div>
    </div>
  );
};
