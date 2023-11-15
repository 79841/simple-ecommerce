"use server";

import prisma from "@/prisma/client";
import type { TCreateProduct, TProduct } from "@/types/Product";
import { revalidatePath } from "next/cache";

export const createProduct = async (product: TCreateProduct) => {
  await prisma.product.create({
    data: product,
  });
  revalidatePath("/admin");
};

export const getProducts = async () => {
  const products = await prisma.product.findMany({});
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
