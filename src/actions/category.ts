"use server";
import { z } from "zod";
import prisma from "../prisma/client";
import { TCategory } from "@/types/Category";

export const createCategory = async (prevState: any, formData: FormData) => {
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
    await prisma.category.create({
      data: validatedData.data,
    });
    return { message: `Added category ${validatedData.data.name}` };
  } catch (e) {
    return { message: "Failed to add category" };
  }
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
  return category;
};
