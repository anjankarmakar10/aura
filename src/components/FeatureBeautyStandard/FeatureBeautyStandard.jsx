import Container from "../Container/Container";
import FeatureGrid from "../FeatureGrid/FeatureGrid";
import styles from "./FeatureBeautyStandard.module.css";
import FeatureInfoWrapper from "../FeatureInfoWrapper/FeatureInfoWrapper";
import Button from "../Button/Button";

const FeatureBeautyStandard = () => {
  return (
    <div>
      <div>
        <svg
          fill="#f3fcce"
          preserveAspectRatio="xMidYMax slice"
          viewBox="-0.5 0 2695.8887 99.563049"
          version="1.1"
          id="svg4"
          className={styles.svgTop}
        >
          <path
            d="M 0,83.173653 3036.0001,85.887379 3036,19.981 C 3036,19.981 3000.03,0 2247.86,0 1960.25,0 1517.85,32.366 1017.347,32.366 585.395,32.366 4.8e-6,7.823 4.8e-6,7.823 Z"
            id="path3"
          ></path>
        </svg>
      </div>

      <div className={styles.wrapper}>
        <Container>
          <FeatureGrid className={styles.grid}>
            <FeatureInfoWrapper>
              <h2>
                Clean Beauty Is
                <br />
                the New Standard.
              </h2>
              <p>
                We’re serious about ingredients. Our 200+ carefully selected
                brands are at the forefront of the clean beauty movement. No
                toxins. Only goodness.
              </p>

              <Button outline={true}>Our Promise</Button>
            </FeatureInfoWrapper>

            <div>
              {/* <Image src="/featured2.webp" fill alt="" /> */}

              <img className={styles.image} src="/featured1.webp" alt="" />
            </div>
          </FeatureGrid>
        </Container>
      </div>

      <div>
        <svg
          fill="#f3fcce"
          preserveAspectRatio="xMidYMax slice"
          viewBox="625 0 1800 129.4125"
          version="1.1"
          id="svg4"
          className={styles.svgBottom}
        >
          <path
            d="M 3135.7251,0 0,1.27489 1.27489,129.41251 c 0,0 37.495,-59.954997 821.486,-59.954997 299.77801,0 927.81401,59.954997 1449.50401,59.954997 450.22,0 866.01,-59.954997 866.01,-59.954997 z"
            id="path3"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default FeatureBeautyStandard;
