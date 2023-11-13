import styles from "./Button.module.css";

function Button({ children, action, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={action}>
      {children}
    </button>
  );
}

export default Button;
