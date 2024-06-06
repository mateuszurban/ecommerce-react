import { Star } from "react-feather";
import styles from "./StarComponent.module.css";

export function StarComponent() {
  return (
    <>
      <Star color={"#858519"} fill="#858519" className={styles.starIcon} />
    </>
  );
}
