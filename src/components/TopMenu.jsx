import { Link } from "react-router-dom";
import styles from "./TopMenu.module.css";
import { Menu, ShoppingCart, X } from "react-feather";
import { useState } from "react";

export function TopMenu() {
  const [toggleMenuStatus, setToggleMenuStatus] = useState(false);

  function toggleMenu() {
    setToggleMenuStatus(!toggleMenuStatus);
  }

  return (
    <>
      <ul className={styles.topMenu}>
        <li>
          <Link to="/" className={styles.mainLogo}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </li>

        {toggleMenuStatus ? (
          <X onClick={() => toggleMenu()} />
        ) : (
          <Menu onClick={() => toggleMenu()} />
        )}
      </ul>

      <div className={`${styles[toggleMenuStatus]} ${styles.menuItems}`}>
        <ul>
          <h4>
            <Link to="/" onClick={() => setToggleMenuStatus(false)}>
              Home
            </Link>
          </h4>
          <h4>Categories</h4>
          <li>
            <Link
              to="/category/furniture"
              onClick={() => setToggleMenuStatus(false)}
            >
              furniture
            </Link>
          </li>
          <li>
            <Link
              to="/category/accessories"
              onClick={() => setToggleMenuStatus(false)}
            >
              accessories
            </Link>
          </li>
          <li>
            <Link to="/category/art" onClick={() => setToggleMenuStatus(false)}>
              art
            </Link>
          </li>
          {/* <h4>Customer</h4>
          <li>
            <Link
              to="/sustainability"
              onClick={() => setToggleMenuStatus(false)}
            >
              Sustainability
            </Link>
          </li> */}
          <h4>
            <Link to="/contact" onClick={() => setToggleMenuStatus(false)}>
              Contact
            </Link>
          </h4>
          <h4>
            <Link to="/faq" onClick={() => setToggleMenuStatus(false)}>
              FAQ
            </Link>
          </h4>
        </ul>
      </div>
    </>
  );
}
