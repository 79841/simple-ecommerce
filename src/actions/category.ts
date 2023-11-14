"use server";
import prisma from "../prisma/client";
import { TCategory } from "@/types/Category";
import { revalidatePath } from "next/cache";

export const createCategory = async (name: string) => {
  await prisma.category.create({
    data: { name },
  });

  revalidatePath("/admin");
};

export const getCategories = async () => {
  const category = await prisma.category.findMany();
  return category;
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
