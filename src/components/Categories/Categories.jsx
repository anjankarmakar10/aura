import categories from "@/data/categories";
import CategoryCard from "../CategoryCard/CategoryCard";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Categories.module.css";
import Link from "next/link";

const Categories = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <SectionHeading>
          <h1>Explore Products By Category</h1>
        </SectionHeading>
        <div className={styles.grid}>
          {categories.map((category) => (
            <Link href="/" key={category.id}>
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Categories;
