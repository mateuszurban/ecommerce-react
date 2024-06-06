import styles from "./AboutCopy.module.css";
import photoAbout from "../assets/photo_about.jpeg";

export function AboutCopy() {
  return (
    <div className={styles.about}>
      <img src={photoAbout} alt="" />
      <h2>About us</h2>
      <p>
        We believe that HOME furniture is not just a utility but a statement of
        artistry and sophistication. Our collections are a symphony of classic
        allure and contemporary flair, designed to elevate your living spaces
        with an air of luxury and comfort.
      </p>
      <p>
        Each piece at HOME is a testament to the mastery of our artisans. From
        the selection of premium materials to the meticulous hand-finishing, we
        ensure every detail is perfected to create furniture that stands the
        test of time. Our designers blend historical motifs with cutting-edge
        trends to bring you furniture that is both nostalgic and avant-garde.
      </p>
      <p>
        Discover the difference – where every furniture piece tells a story of
        heritage, innovation, and artistry. Welcome to a world where your space
        becomes a masterpiece of elegance and function. Welcome HOME.
      </p>
    </div>
  );
}
