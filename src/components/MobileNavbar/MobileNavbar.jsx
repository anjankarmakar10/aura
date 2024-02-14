import { ShoppingBag, Menu } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./MobileNavbar.module.css";
const MobileNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <button>
        <Menu size={28} />
      </button>
      <Logo />
      <button>
        <ShoppingBag size={28} />
      </button>
    </nav>
  );
};
export default MobileNavbar;
