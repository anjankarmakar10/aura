import products from "@/data/products";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BudgetSkinCareProducts.module.css";
import Button from "../Button/Button";
import { FeaturedProductsContainer } from "../FeaturedProductsContainer/FeaturedProductsContainer";
import ProductCard from "../ProductCard/ProductCard";
const BudgetSkinCareProducts = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <SectionHeading>
          <h1>Skincare Under $40</h1>
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
export default BudgetSkinCareProducts;
