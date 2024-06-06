import { useState } from "react";
import styles from "./ProductDescriptionLong.module.css";

export function ProductDescriptionLong({ descriptionLong }) {
  const shippingDescription =
    "Explore a curated collection of exquisite pieces that redefine elegance. From plush sofas to sleek dining sets, each item whispers sophistication. And the best part? Free shipping awaits you on every order—because comfort knows no boundaries. Transform your space today!";
  const returnsDescription =
    "Enjoy free returns on every order—because your satisfaction knows no boundaries. If you’re not completely delighted with your purchase, simply reach out to our customer care team, and we’ll arrange a hassle-free return. Transform your space with confidence!";

  const [categorySelected, setCategorySelected] = useState("details");

  return (
    <div className={styles.productDescriptionLong}>
      {/* <hr /> */}
      <ul className={styles.descriptionContainer}>
        <li>
          <h4
            onClick={() => setCategorySelected("details")}
            className={categorySelected === "details" ? `${styles.active}` : ""}
          >
            details
          </h4>
        </li>
        <li>
          <h4
            onClick={() => setCategorySelected("shipping")}
            className={
              categorySelected === "shipping" ? `${styles.active}` : ""
            }
          >
            shipping
          </h4>
        </li>
        <li>
          <h4
            onClick={() => setCategorySelected("returns")}
            className={categorySelected === "returns" ? `${styles.active}` : ""}
          >
            returns
          </h4>
        </li>
      </ul>
      {categorySelected === "details" ? <p>{descriptionLong}</p> : null}
      {categorySelected === "shipping" ? <p>{shippingDescription}</p> : null}
      {categorySelected === "returns" ? <p>{returnsDescription}</p> : null}
    </div>
  );
}
