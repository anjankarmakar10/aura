import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({ children, outline, className, ...rest }) => {
  return (
    <button
      className={clsx(
        styles.button,
        outline ? styles.outline : styles.primary,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
