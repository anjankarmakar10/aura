import clsx from "clsx";
import Link from "next/link";
import styles from "./FooterLinks.module.css";
const FooterLinks = ({ children, title, className, ...rest }) => {
  return (
    <div {...rest} className={clsx(styles.wrapper, className)}>
      <header>
        <h6>{title || "Title"}</h6>
      </header>

      <ul>{children}</ul>
    </div>
  );
};
export default FooterLinks;
