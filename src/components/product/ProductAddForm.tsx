"use client";
import { ChangeEventHandler, useRef, useState } from "react";
import Search from "../search/Search";
import { searchCategories } from "@/actions/category";
import { TCategory } from "@/types/Category";
import { TProduction } from "@/types/Production";
import { searchProductions } from "@/actions/production";
import RoundInputBox from "../shared/input/RoundInputBox";
import AddButton from "../shared/button/AddButton";
import { useFormState } from "react-dom";
import { z } from "zod";
import { createProduct } from "@/actions/product";

export const ProductAddForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<TCategory | null>(
    null
  );
  const [selectedProduction, setSelectedProduction] =
    useState<TProduction | null>(null);

  const handleAction = async (prevState: any, formData: FormData) => {
    const schema = z.object({
      name: z.string().min(1),
      price: z.number(),
      categoryId: z.string().min(1),
      productionId: z.string().min(1),
    });
    const validatedData = schema.safeParse({
      name: formData.get("name"),
      price: Number(formData.get("price")),
      categoryId: formData.get("categoryId"),
      productionId: formData.get("productionId"),
    });
    if (!validatedData.success) {
      return { message: "Wrong product data" };
    }
    try {
      await createProduct(validatedData.data);
      setSelectedCategory(null);
      setSelectedProduction(null);
      ref.current?.reset();
      return { message: `Added product ${validatedData.data.name}` };
    } catch (e) {
      return { message: "Failed to create Product" };
    }
  };

  const [state, formAction] = useFormState(handleAction, null);

  return (
    <div className="flex flex-col items-center w-[80%] ">
      <form
        ref={ref}
        className="flex flex-col items-center"
        action={formAction}
      >
        <RoundInputBox type="text" name="name" />
        <div className="text-red-500 m-2">{state?.message}</div>
        <Search
          searchAction={searchCategories}
          selectedItem={selectedCategory}
          setSelectedItem={setSelectedCategory}
        />
        <input
          type="hidden"
          name="categoryId"
          value={selectedCategory?.id ?? ""}
        />
        <Search
          searchAction={searchProductions}
          selectedItem={selectedProduction}
          setSelectedItem={setSelectedProduction}
        />
        <input
          type="hidden"
          name="productionId"
          value={selectedProduction?.id ?? ""}
        />
        <RoundInputBox type="number" name="price" />

        <AddButton />
      </form>
    </div>
  );
};
