import clsx from "clsx";
import styles from "./FeatureInfoWrapper.module.css";
const FeatureInfoWrapper = ({ children, className, ...rest }) => {
  return (
    <article {...rest} className={clsx(styles.wrapper, className)}>
      {children}
    </article>
  );
};
export default FeatureInfoWrapper;
