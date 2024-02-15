import Button from "../Button/Button";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./FeaturedBrands.module.css";

const FeaturedBrands = () => {
  return (
    <Container>
      <section className={styles.wrapper}>
        <SectionHeading>
          <h2>Featured Brands</h2>
        </SectionHeading>
        <div className={styles.grid}>
          <div className={styles.grid1}>
            <img src="/brand1.webp" alt="" />
          </div>
          <div className={styles.grid2}>
            <img src="/brand2.webp" alt="" />
          </div>
          <div className={styles.grid3}>
            <img src="/brand3.webp" alt="" />
          </div>
          <div className={styles.grid4}>
            <img src="/brand9.jpg" alt="" />
          </div>
          <div className={styles.grid5}>
            <img src="/brand5.webp" alt="" />
          </div>
          <div className={styles.grid6}>
            <img src="/brand7.webp" alt="" />
          </div>
        </div>
        <Button outline={true}>Shop All Brands</Button>
      </section>
    </Container>
  );
};
export default FeaturedBrands;
