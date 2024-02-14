import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({ children, utline, className, ...rest }) => {
  return (
    <button
      className={clsx(
        styles.button,
        utline ? styles.outline : styles.primary,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
