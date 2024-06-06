import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs({ productCategory }) {
  return (
    <div className={styles.breadcrumbs}>
      <p>
        <Link to={"/"}>Products</Link>
        {" > "}
        <Link to={`/category/${productCategory}`}>{productCategory}</Link>
      </p>
    </div>
  );
}
