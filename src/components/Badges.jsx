import styles from "./Badges.module.css";
import { Package, Shield, Truck } from "react-feather";

export function Badges() {
  return (
    <ul className={styles.badges}>
      <li>
        <Truck />
        Free global shipping
      </li>
      <li>
        <Shield />
        Secure payments
      </li>
      <li>
        <Package />
        No-questions-asked returns
      </li>
    </ul>
  );
}
