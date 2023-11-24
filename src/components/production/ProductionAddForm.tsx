"use client";
import { createProduction } from "@/actions/production";
import { memo, useRef } from "react";
import { useFormState } from "react-dom";
import { z } from "zod";
import RoundInputBox from "../shared/input/RoundInputBox";

export const ProductionAddForm = memo(function ProductionAddForm() {
  const ref = useRef<HTMLFormElement>(null);

  const handleAction = async (prevState: any, formData: FormData) => {
    const schema = z.object({
      name: z.string().min(1),
    });
    const validatedData = schema.safeParse({
      name: formData.get("name"),
    });
    if (!validatedData.success) {
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
        <RoundInputBox type="text" name="name" />
        <button
          type="submit"
          className="h-8 w-16 rounded-md border-2 border-solid border-black"
        >
          Add
        </button>
      </form>
      <div className="m-2 text-red-500">{state?.message}</div>
    </div>
  );
});
