import styles from "./Bestsellers.module.css";

export function Bestsellers({ title, description, categoryImageSrc }) {
  return (
    <div className={styles.bestsellers}>
      <img src={categoryImageSrc} alt="" />
      <p>{title}</p>
      <h2>{description}</h2>
    </div>
  );
}
