import styles from "./Hero.module.css";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <Link to="/category/furniture">
      <div className={styles.hero}>
        <div className={styles.heroImage}></div>
        <div className={styles.heroColumn}>
          <h2>Discover Timeless Comfort.</h2>
          <p>
            Explore our handcrafted furniture collection designed for modern
            living.
          </p>
          <Button buttonText={"Shop Now"} colourTheme={"main"} />
        </div>
      </div>
    </Link>
  );
}
