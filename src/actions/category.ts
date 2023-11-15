"use server";
import prisma from "../prisma/client";
import type { TCategory, TCreateCategory } from "@/types/Category";
import { revalidatePath } from "next/cache";

export const createCategory = async (category: TCreateCategory) => {
  await prisma.category.create({
    data: category,
  });

  revalidatePath("/admin");
};

export const getCategories = async () => {
  const categories = await prisma.category.findMany({});
  return categories;
};

export const searchCategories = async (keyword: string) => {
  const categories = await prisma.category.findMany({
    where: {
      name: {
        contains: keyword,
      },
    },
  });
  return categories;
};

export const deleteCategory = async (id: TCategory["id"]) => {
  const category = await prisma.category.delete({
    where: {
      id,
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/adimn");
};
