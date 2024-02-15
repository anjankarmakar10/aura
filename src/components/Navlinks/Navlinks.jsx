import Link from "next/link";
import styles from "./NavLinks.module.css";
import { Searchbar } from "../Searchbar/Searchbar";
const Navlinks = () => {
  return (
    <ul className={styles.navlinks}>
      <Link href="/">Brands</Link>
      <Link href="/">Skin Care</Link>
      <Link href="/">Make Up</Link>
      <Link href="/">Hair</Link>
      <Link href="/">Body</Link>
    </ul>
  );
};
export default Navlinks;
