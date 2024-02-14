"use client";

import Logo from "../Logo/Logo";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Navlinks from "../Navlinks/Navlinks";
import { useEffect, useState } from "react";
import clsx from "clsx";

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
          <Button outline={true}>Subscribe Now</Button>
        </div>
      </nav>
      <MobileNavbar />
    </div>
  );
};
export default Navbar;
