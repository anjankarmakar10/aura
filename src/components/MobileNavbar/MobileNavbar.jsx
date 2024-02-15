"use client";
import { ShoppingBag, Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./MobileNavbar.module.css";
import clsx from "clsx";
import Navlinks from "../Navlinks/Navlinks";
import Button from "../Button/Button";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import { useState } from "react";
import { Searchbar } from "../Searchbar/Searchbar";

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <RemoveScroll enabled={openMenu}>
        <FocusLock disabled={!openMenu} autoFocus returnFocus>
          <div
            onClick={() => setOpenMenu(false)}
            className={clsx(styles.backdrop, openMenu && styles.active)}
          ></div>
          <div className={clsx(styles.mobileMenu, openMenu && styles.active)}>
            <div className={styles.menuContent}>
              <Navlinks />
              <Button onClick={() => setOpenMenu(false)} outline={true}>
                <X />
                Dismiss
              </Button>
            </div>
          </div>
        </FocusLock>
      </RemoveScroll>

      <nav className={styles.navbar}>
        <button onClick={() => setOpenMenu(true)}>
          <Menu size={28} />
        </button>
        <Logo />
        <button>
          <ShoppingBag size={28} />
        </button>
      </nav>
    </>
  );
};
export default MobileNavbar;
