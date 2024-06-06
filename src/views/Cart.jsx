import { useEffect, useState } from "react";
import { CartItems } from "../components/CartItems";
import { CartSummary } from "../components/CartSummary";
import { PRODUCTS } from "../constants/products";

export function Cart() {
  const allProducts = PRODUCTS;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let localStorageCartItems;
    localStorageCartItems = JSON.parse(localStorage.getItem("cart"));
    setCartItems(localStorageCartItems);
  }, []);

  // Filters "in" items from PRODUCTS, it they match localStorage id's
  // In proper app, this would probably be an API call for products with a matching ID.
  let cartProducts = allProducts.filter((product) =>
    cartItems.includes(product.id)
  );

  function removeFromCart(id) {
    setCartItems((prevTasks) =>
      prevTasks.filter((cartItem) => cartItem !== id)
    );
  }

  return (
    <>
      <CartItems products={cartProducts} removeFromCart={removeFromCart} />
      <CartSummary products={cartProducts} />
      <hr />
    </>
  );
}
