import { Link, useRouteError } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";
import { Button } from "../components/Button";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage}>
      <h2>Sorry, something went wrong.</h2>
      <p>{error.status}</p>
      <p>{error.statusText || error.message}</p>

      <Link to="/">
        <Button buttonText={"Go back"} colourTheme={"main"} />
      </Link>
    </div>
  );
}
