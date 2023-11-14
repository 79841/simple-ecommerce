"use server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

type TFunc = () => Promise<any>;

export default async function revalidateAction(func: TFunc) {
  console.log(headers);
  await func();
  // revalidatePath
}
