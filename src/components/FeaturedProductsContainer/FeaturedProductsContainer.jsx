import clsx from "clsx";
import styles from "./FeaturedProductsContainer.module.css";

export const FeaturedProductsContainer = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={clsx(styles.wrapper, className)}>
      {children}
    </div>
  );
};
