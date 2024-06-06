import styles from "./CheckoutForm.module.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CheckoutForm() {
  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    familyName: "",
    email: "",
    phone: "",
    streetName: "",
    streetNumber: "",
    city: "",
    country: "",
    postalCode: "",
  });

  return (
    <div className={styles.checkoutForm}>
      <form>
        <h2>Checkout personal details:</h2>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            defaultValue={"John"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="familyName">Family name:</label>
          <input
            type="text"
            id="familyName"
            defaultValue={"Doe"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, familyName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            defaultValue={"example@example.com"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            defaultValue={"987654321"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, phone: e.target.value })
            }
          />
        </div>
        <div>
          <h2>Checkout shipping address:</h2>
          <label htmlFor="streetName">Street name:</label>
          <input
            type="text"
            id="streetName"
            defaultValue={"Street"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, streetName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="streetNumber">Street number:</label>
          <input
            type="text"
            id="streetNumber"
            defaultValue={"42"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, streetNumber: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            defaultValue={"Bern"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, city: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            defaultValue={"Switzerland"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, country: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal code:</label>
          <input
            type="text"
            id="postalCode"
            defaultValue={"1234"}
            required
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, postalCode: e.target.value })
            }
          />
        </div>

        <Link to="/confirmation">
          <Button
            type="submit"
            buttonText={"Order now"}
            colourTheme={"main"}
            required
          />
        </Link>
      </form>
    </div>
  );
}
