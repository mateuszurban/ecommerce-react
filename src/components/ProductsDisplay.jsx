import styles from "./ProductsDisplay.module.css";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { MainPageProductDisplay } from "../components/MainPageProductDisplay";
import { PRODUCTS } from "../constants/products";

export function ProductsDisplay({ categoryToDisplay }) {
  const categoryProductsToDisplay = PRODUCTS.filter(
    (product) => product.category === categoryToDisplay
  );

  return (
    <>
      <div className={styles.productsDisplay}>
        <Breadcrumbs productCategory={categoryToDisplay} />
      </div>

      <div className={styles.productsDisplayContainer}>
        {categoryProductsToDisplay.map((product) => {
          return (
            <MainPageProductDisplay
              key={product.id}
              product={product}
              buttonText={"Add to cart"}
            />
          );
        })}
      </div>
    </>
  );
}
