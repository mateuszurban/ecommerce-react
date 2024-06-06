import { Link } from "react-router-dom";
import styles from "./CartSummary.module.css";
import { Button } from "./Button";

export function CartSummary({ products }) {
  let totalSum = 0;
  products.forEach((product) => {
    totalSum += Number(product.priceUSD);
  });

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartSummary}>
        <h2>Summary</h2>
        <div className={styles.cartSummaryRow}>
          <h3>Total:</h3>
          <p>{totalSum} USD</p>
        </div>
        <div className={styles.cartSummaryRow}>
          <h3>Shipping: </h3>
          <p>always free</p>
        </div>
        <hr />
        <div className={styles.cartSummaryRow}>
          <h3>Grand total: </h3>
          <h2>{totalSum} USD</h2>
        </div>
        <Link to={"/checkout"}>
          <Button buttonText={"Checkout"} colourTheme={"main"} />
        </Link>
      </div>
    </div>
  );
}
