import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Footer.module.css";
import FooterLinks from "../FooterLinks/FooterLinks";
import Link from "next/link";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.grid}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo-white.svg" width={80} height={40} alt="logo" />
          </Link>

          <div className={styles.links}>
            <FooterLinks title="NIBELU">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Terms Of Use</Link>
              </li>
            </FooterLinks>

            <FooterLinks title="TOP BRANDS">
              <li>
                <Link href="/">Cerave</Link>
              </li>
              <li>
                <Link href="/">Acure</Link>
              </li>
              <li>
                <Link href="/">Cetaphil</Link>
              </li>
              <li>
                <Link href="/">Hum</Link>
              </li>
            </FooterLinks>

            <FooterLinks title="CATEGORIES">
              <li>
                <Link href="/">Skin Care</Link>
              </li>
              <li>
                <Link href="/">Make Up</Link>
              </li>
              <li>
                <Link href="/">Hair</Link>
              </li>
              <li>
                <Link href="/">Body</Link>
              </li>
            </FooterLinks>
          </div>

          <NewsletterForm />
        </div>
        <div className={styles.bottom}>
          <div className={styles.rights}>
            <span>© 2024 Aura. All rights reserved</span>
          </div>
          <div className={styles.bottomLinks}>
            <ul>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Cookie Policy</Link>
              </li>
            </ul>
            <div className={styles.socials}>
              <Link href="/">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </Link>

              <Link href="/">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
