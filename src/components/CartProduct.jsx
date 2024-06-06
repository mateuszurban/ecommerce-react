import { Button } from "./Button";
import styles from "./CartProduct.module.css";
import { Link } from "react-router-dom";

export function CartProduct({ product, removeFromCart }) {
  return (
    <div className={styles.cartContainer}>
      <img
        src={product.photos[0]}
        alt=""
        className={styles.cartProductThumbnail}
      />
      <div className={styles.cartProduct}>
        <div className={styles.cartProductInfo}>
          <h2>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h2>
          <p>{product.priceUSD} USD</p>
        </div>
        <div className={styles.cartProductButtons}>
          <Button
            buttonText={"Remove item"}
            colourTheme={"warning"}
            onClick={() => removeFromCart(product.id)}
          />
        </div>
      </div>
    </div>
  );
}
