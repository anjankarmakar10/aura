import clsx from "clsx";
import styles from "./SectionHeading.module.css";
const SectionHeading = ({ children, className, ...rest }) => {
  return (
    <header {...rest} className={clsx(styles.header, className)}>
      {children}
    </header>
  );
};
export default SectionHeading;
