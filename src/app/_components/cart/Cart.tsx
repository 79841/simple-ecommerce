"use client";

import { addItem, deleteItem, subItem } from "@/lib/redux";
import { cartSelector } from "@/lib/redux/slices/cartSlice/selector";
import { TProduct } from "@/types/Product";
import { MouseEventHandler, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

type TCartItemProps = {
  item: { count: number; product: TProduct };
};
const CartItem = memo(function CartItem({ item }: TCartItemProps) {
  const { count, product } = item;
  const dispatch = useDispatch();

  const handleMinus: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(subItem(product.id));
  };
  const handlePlus: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(addItem({ count: 1, product }));
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(deleteItem(product.id));
  };
  return (
    <div className="m-2 rounded-md border-2 border-solid border-black p-2">
      <div>{product.name}</div>
      <div>{count}</div>
      <div>{product.price}</div>
      <div>
        <button className="button-bordered" onClick={handleMinus}>
          -
        </button>
        <div>count</div>
        <button className="button-bordered" onClick={handlePlus}>
          +
        </button>
      </div>
      <button className="button-bordered" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
});

export const Cart = () => {
  const cart = useSelector(cartSelector);
  const totalAmount = Object.values(cart).reduce(
    (total, { count, product }) => {
      return total + count * product.price;
    },
    0,
  );
  return (
    <div>
      {Object.values(cart).map((item) => (
        <CartItem key={item.product.id} item={item} />
      ))}
      <div>{totalAmount}</div>
    </div>
  );
};
