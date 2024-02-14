import Logo from "../Logo/Logo";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <Logo />
        </div>
        <div>Search</div>
      </nav>
      <MobileNavbar />
    </div>
  );
};
export default Navbar;
