import Logo from "../Logo/Logo";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Navlinks from "../Navlinks/Navlinks";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navStart}>
          <Logo />
          <Navlinks />
        </div>
        <div className={styles.navEnd}>
          <Button outline={true}>Subscribe Now</Button>
        </div>
      </nav>
      <MobileNavbar />
    </div>
  );
};
export default Navbar;
