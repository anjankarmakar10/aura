import clsx from "clsx";
import styles from "./FeaturedProductsContainer.module.css";

const FeaturedProductsContainer = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={clsx(styles.wrapper, className)}>
      {children}
    </div>
  );
};

export default FeaturedProductsContainer;
