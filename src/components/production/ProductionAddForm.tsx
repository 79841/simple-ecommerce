"use client";
import { createProduction } from "@/actions/production";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { z } from "zod";

export const ProductionAddForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const handleAction = async (prevState: any, formData: FormData) => {
    const schema = z.object({
      name: z.string().min(1),
    });
    const validatedData = schema.safeParse({
      name: formData.get("name"),
    });
    if (!validatedData.success) {
      console.log(validatedData);
      return { message: "Wrong production name" };
    }
    try {
      await createProduction(validatedData.data);
      return { message: `Added Production ${validatedData.data.name}` };
    } catch (e) {
      return { message: "Falied to create Production" };
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
