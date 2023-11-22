"use server";

import type { TCreateProduct, TProduct } from "@/types/Product";
import { revalidatePath } from "next/cache";
import prisma from "../../prisma/client";

export const createProduct = async (product: TCreateProduct) => {
  await prisma.product.create({
    data: product,
  });
  revalidatePath("/admin");
};

export const getProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      production: true,
    },
  });
  return products;
};

export const deleteProduct = async (productId: TProduct["id"]) => {
  await prisma.product.delete({
    where: {
      id: productId,
    },
  });
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  revalidatePath("admin");
};
