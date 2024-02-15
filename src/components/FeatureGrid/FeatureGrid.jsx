import clsx from "clsx";
import styles from "./FeatureGrid.module.css";

const FeatureGrid = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={clsx(styles.wrapper, className)}>
      {children}
    </section>
  );
};
export default FeatureGrid;
