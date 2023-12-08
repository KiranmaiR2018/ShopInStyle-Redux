import { useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");
  // accessing cartState from store.js
  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length} / ${total}
        </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
