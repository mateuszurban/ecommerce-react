import styles from "./ProductInfo.module.css";
import { ReviewsSmall } from "./ReviewsSmall";
import { ProductImageCarousel } from "./ProductImageCarousel";

export function ProductInfo({ product }) {
  return (
    <div className={styles.productInfo}>
      <h1>{product.name}</h1>
      <ReviewsSmall />
      <ProductImageCarousel productImages={product.photos} />

      <h2>USD $399</h2>
    </div>
  );
}
