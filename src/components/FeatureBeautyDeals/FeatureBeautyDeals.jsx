import Image from "next/image";
import Container from "../Container/Container";
import FeatureGrid from "../FeatureGrid/FeatureGrid";
import styles from "./FeatureBeautyDeals.module.css";
import FeatureInfoWrapper from "../FeatureInfoWrapper/FeatureInfoWrapper";
import Button from "../Button/Button";

const FeatureBeautyDeals = () => {
  return (
    <div>
      <div>
        <svg
          className={styles.svgTop}
          fill="#d0f8f8"
          preserveAspectRatio="xMinYMax slice"
          viewBox="0 0 2043 132.4725"
          version="1.1"
          id="svg4"
        >
          <path
            d="M -0.05837468,132.4725 2043.3402,132.92951 2043,0 c 0,0 -24.42,33.606 -535,33.606 C 1312.77,33.606 903.75096,0 563.99996,0 270.785,0 0,33.606 0,33.606 Z"
            id="path2"
          ></path>
        </svg>
      </div>

      <div className={styles.wrapper}>
        <Container>
          <FeatureGrid>
            <div>
              {/* <Image src="/featured2.webp" fill alt="" /> */}

              <img className={styles.image} src="/featured2.webp" alt="" />
            </div>

            <FeatureInfoWrapper>
              <h2>
                Beauty You Want. <br /> Deals You Love.
              </h2>
              <p>
                Never miss a deal. We bring you the best prices for your clean
                beauty favorites. Explore over 3400+ beauty products for all
                needs and all budgets.
              </p>

              <Button outline={true}>Shop All</Button>
            </FeatureInfoWrapper>
          </FeatureGrid>
        </Container>
      </div>

      <div>
        <svg
          className={styles.svgBottom}
          fill="#d0f8f8"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 2860 148.87981"
          x="100"
        >
          <path
            d="M 2859.8298,0 0,0.57904 v 123.99897 c 0,0 33.887,24.3018 742.45,24.3018 270.937,0 687.688,-39.3646 1159.18,-39.3646 406.91,0 958.37,29.8501 958.37,29.8501 z"
            id="path2"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default FeatureBeautyDeals;
