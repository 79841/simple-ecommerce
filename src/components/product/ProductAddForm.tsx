"use client";
import { useRef } from "react";
import Search from "../search/Search";
import { searchCategories } from "@/actions/category";
import CategorySelector from "./CategorySelector";

export const ProductAddForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="flex flex-col items-center w-[80%]">
      <form ref={ref}>
        <input
          className="border-black border-2 border-solid h-8 rounded-md "
          type="text"
          name="name"
        />

        <Search searchAction={searchCategories} Selector={CategorySelector} />

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
