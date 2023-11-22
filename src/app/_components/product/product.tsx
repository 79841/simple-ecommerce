"use client";
import { addItem } from "@/lib/redux";
import { TProduct } from "@/types/Product";
import { MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

type TProductProps = {
  product: TProduct;
};
export const Product = ({ product }: TProductProps) => {
  const { name, category, production, price } = product;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleMinus: MouseEventHandler<HTMLButtonElement> = () => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  };

  const handlePlus: MouseEventHandler<HTMLButtonElement> = () => {
    setCount((prev) => prev + 1);
  };

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(addItem({ count, product }));
  };

  return (
    <div className="w-[8rem] rounded-md border-2 border-solid border-black p-2">
      <div>{name}</div>
      <div>{category.name}</div>
      <div>{production.name}</div>
      <div>{price}</div>
      <div className="flex justify-evenly">
        <button className="button-bordered" onClick={handleMinus}>
          -
        </button>
        <div>{count}</div>
        <button className="button-bordered" onClick={handlePlus}>
          +
        </button>
      </div>
      <button className="button-bordered " onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};
