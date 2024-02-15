import products from "@/data/products";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BudgetMakeupProducts.module.css";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import FeaturedProductsContainer from "../FeaturedProductsContainer/FeaturedProductsContainer";

const BudgetMakeupProducts = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <SectionHeading>
          <h1>Makeup Under $20</h1>
        </SectionHeading>

        <FeaturedProductsContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </FeaturedProductsContainer>

        <Button outline={true}>Show All Products</Button>
      </Container>
    </section>
  );
};
export default BudgetMakeupProducts;
