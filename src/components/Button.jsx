import styles from "./Button.module.css";

export function Button({ buttonText, colourTheme, onClick }) {
  return (
    <div className={styles.button}>
      <button onClick={onClick} className={`${styles[colourTheme]}`}>
        {buttonText}
      </button>
    </div>
  );
}
