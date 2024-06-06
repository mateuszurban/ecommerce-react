import { Facebook, Instagram, Twitter, Youtube } from "react-feather";

export function Contact() {
  return (
    <div className="container">
      <h2>Contact us anytime</h2>
      <p>Phone: 987 654 321</p>
      <p>Email: example@example.com</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
      </div>
    </div>
  );
}
