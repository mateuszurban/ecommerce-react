import { Link } from "react-router-dom";
import styles from "./MainPageProductDisplay.module.css";
import { Button } from "./Button";

export function MainPageProductDisplay({ product, buttonText }) {
  function addProductToCart(id) {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    cartItems.push(id);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <>
      <div className={styles.productDisplay}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.photos[0]}
            alt=""
            className={styles.productDisplayPhoto}
          />
          <h2>{product.name}</h2>
        </Link>
        <div className={styles.productInfo}>
          <p>{product.priceUSD} USD</p>
          <Button
            onClick={() => addProductToCart(product.id)}
            buttonText={buttonText}
            colourTheme={"main"}
          />
        </div>
      </div>
    </>
  );
}
