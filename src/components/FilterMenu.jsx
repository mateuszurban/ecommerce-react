import { Link } from "react-router-dom";
import styles from "./FilterMenu.module.css";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "react-feather";

export function FilterMenu() {
  const [toggleFilterMenuStatus, setToggleFilterMenuStatus] = useState(false);

  function toggleFilterMenu() {
    setToggleFilterMenuStatus(!toggleFilterMenuStatus);
  }

  return (
    <div className={styles.filterMenu}>
      <div onClick={toggleFilterMenu} className={styles.filterMenuTitle}>
        <h2>Categories</h2>
        <div className={styles.columnToggle}>
          {toggleFilterMenuStatus ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
      <ul className={styles[toggleFilterMenuStatus]}>
        <li>
          <Link
            to="/category/furniture"
            onClick={() => setToggleFilterMenuStatus(false)}
          >
            furniture
          </Link>
        </li>
        <li>
          <Link
            to="/category/accessories"
            onClick={() => setToggleFilterMenuStatus(false)}
          >
            accessories
          </Link>
        </li>
        <li>
          <Link
            to="/category/art"
            onClick={() => setToggleFilterMenuStatus(false)}
          >
            art
          </Link>
        </li>
      </ul>
    </div>
  );
}
