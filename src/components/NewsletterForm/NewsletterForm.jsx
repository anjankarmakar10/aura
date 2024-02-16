import Image from "next/image";
import styles from "./NewsletterForm.module.css";

const NewsletterForm = () => {
  return (
    <section className={styles.wrapper}>
      <header>
        <h4>Join the Community</h4>
        <p>
          Subscribe to gain access to the latest deals on all clean favorites.
        </p>
      </header>
      <form>
        <Image
          className={styles.email}
          width={16}
          height={16}
          alt=""
          src="/email.svg"
        />
        <input type="email" placeholder="Your Email" />
        <Image
          className={styles.arrow}
          width={18}
          height={18}
          alt=""
          src="/arrow-right.svg"
        />
      </form>
    </section>
  );
};
export default NewsletterForm;
