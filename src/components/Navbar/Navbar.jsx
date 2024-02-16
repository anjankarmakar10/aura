"use client";

import Logo from "../Logo/Logo";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import styles from "./Navbar.module.css";
import Navlinks from "../Navlinks/Navlinks";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ShoppingBag } from "lucide-react";
import { Searchbar } from "../Searchbar/Searchbar";

const Navbar = () => {
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > 50) {
        setIsDown(true);
      } else {
        setIsDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDown]);

  return (
    <div className={clsx(styles.bg, isDown ? styles.bgShow : styles.bgHide)}>
      <nav className={styles.navbar}>
        <div className={styles.navStart}>
          <Logo />
          <Navlinks />
        </div>
        <div className={styles.navEnd}>
          <Searchbar
            className={clsx(isDown ? styles.search : styles.serachHide)}
          />
          <button>
            <ShoppingBag />
          </button>
        </div>
      </nav>
      <MobileNavbar />
    </div>
  );
};
export default Navbar;
