import { Button } from "./Button";
import styles from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <h2>Join our newsletter</h2>
      <p>Never miss our product launch, be in the know</p>
      <form>
        <label htmlFor="newsletter"></label>
        <input
          type="email"
          id="newsletter"
          defaultValue={"Your email address"}
        />
        <Button buttonText={"Sign up"} colourTheme={"cream"} />
      </form>
    </div>
  );
}
