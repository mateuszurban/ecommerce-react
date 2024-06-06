import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export function Confirmation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        minWidth: "300px",
        maxWidth: "600px",
      }}
    >
      <h2>Thanks! Your order has been placed.</h2>
      <p>
        Check your email for status tracking, delivery options and additional
        information. Our support is here for you, if you have any questions.
      </p>
      <Link to="/">
        <Button buttonText={"Go back"} colourTheme={"main"} />
      </Link>
    </div>
  );
}
