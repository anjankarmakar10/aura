import Container from "../Container/Container";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import { Searchbar } from "../Searchbar/Searchbar";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <Container>
          <Searchbar />

          <div className={styles.grid}>
            <div className={styles.featured}>
              <h1>Clean Beauty Made Easy</h1>
              <p>
                Discover the best deals on the largest
                <br />
                platform for clean beauty
              </p>
              <Button>View All Products</Button>

              <div className={styles.facts}>
                <div className={styles.fact}>
                  <Image src="/product.svg" width={40} height={40} alt="'" />
                  <div>
                    <p className={styles.factInfoTitle}>3400+</p>
                    <p className={styles.factInfoDesc}>Products</p>
                  </div>
                </div>

                <div className={styles.fact}>
                  <Image src="/brand.svg" width={40} height={40} alt="'" />
                  <div>
                    <p className={styles.factInfoTitle}>200+</p>
                    <p className={styles.factInfoDesc}>Brands</p>
                  </div>
                </div>

                <div className={styles.fact}>
                  <Image
                    className={styles.factImage}
                    src="/saving.svg"
                    width={40}
                    height={40}
                    alt="'"
                  />
                  <div>
                    <p className={styles.factInfoTitle}>25%</p>
                    <p className={styles.factInfoDesc}>Avg. saving</p>
                  </div>
                </div>

                <div className={styles.fact}>
                  <Image src="/retailer.svg" width={40} height={40} alt="'" />
                  <div>
                    <p className={styles.factInfoTitle}>10+</p>
                    <p className={styles.factInfoDesc}>Retailers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Hero;
