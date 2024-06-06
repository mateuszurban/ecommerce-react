import styles from "./ReviewsSmall.module.css";
import { StarComponent } from "./StarComponent";

export function ReviewsSmall() {
  return (
    <div className={styles.reviewsSmall}>
      <p>
        <StarComponent /> 5.0
      </p>
      <p>152 reviews</p>
    </div>
  );
}
