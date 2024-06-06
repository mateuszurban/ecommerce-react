import styles from "./ProductDescriptionShort.module.css";

export function ProductDescriptionShort({ descriptionShort }) {
  return (
    <div className={styles.productDescriptionShort}>
      <p>{descriptionShort}</p>
    </div>
  );
}
