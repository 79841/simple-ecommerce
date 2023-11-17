"use client";
import { useRef, useState } from "react";
import Search from "../search/Search";
import { searchCategories } from "@/actions/category";
import { TCategory } from "@/types/Category";
import { TProduction } from "@/types/Production";
import { searchProductions } from "@/actions/production";
import RoundInputBox from "../shared/input/RoundInputBox";

export const ProductAddForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<TCategory | null>(
    null
  );
  const [selectedProduction, setSelectedProduction] =
    useState<TProduction | null>(null);

  return (
    <div className="flex flex-col items-center w-[80%]">
      <form ref={ref}>
        <RoundInputBox type="text" name="name" />
        {/* <div className="text-red-500 m-2">{state?.message}</div> */}
        <Search
          searchAction={searchCategories}
          selectedItem={selectedCategory}
          setSelectedItem={setSelectedCategory}
        />
        <Search
          searchAction={searchProductions}
          selectedItem={selectedProduction}
          setSelectedItem={setSelectedProduction}
        />

        <button
          type="submit"
          className="border-black border-2 border-solid h-8 rounded-md w-16"
        >
          Add
        </button>
      </form>
    </div>
  );
};
