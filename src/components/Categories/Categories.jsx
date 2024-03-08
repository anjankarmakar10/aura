import CategoryCard from "../CategoryCard/CategoryCard";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Categories.module.css";
const Categories = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <SectionHeading>
          <h1>Explore Products By Category</h1>
        </SectionHeading>
        <div className={styles.grid}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </Container>
    </section>
  );
};
export default Categories;
