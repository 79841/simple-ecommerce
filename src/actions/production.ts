"use server";

import { TCreateProduction, TProduction } from "@/types/Production";
import { revalidatePath } from "next/cache";
import prisma from "../../prisma/client";

export const createProduction = async (production: TCreateProduction) => {
  await prisma.production.create({
    data: production,
  });
  revalidatePath("/admin");
};

export const getProductions = async () => {
  const productions = await prisma.production.findMany({});
  return productions;
};

export const searchProductions = async (keyword: string) => {
  const productions = await prisma.production.findMany({
    where: {
      name: {
        contains: keyword,
      },
    },
  });
  return productions;
};

export const deleteProduction = async (productionId: TProduction["id"]) => {
  await prisma.production.delete({
    where: {
      id: productionId,
    },
  });
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  revalidatePath("admin");
};
