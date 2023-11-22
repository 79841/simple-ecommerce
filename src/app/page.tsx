import { Cart } from "./_components/cart";
import { Products } from "./_components/product";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center p-10 pt-20">
      <Products />
      <Cart />
    </div>
  );
}
