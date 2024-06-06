import styles from "./CartItems.module.css";
import { CartProduct } from "./CartProduct";

export function CartItems({ products }) {
  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartItems}>
        <h2>Cart items</h2>
        <ul>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
}
