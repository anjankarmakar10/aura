import Image from "next/image";
import styles from "./ProductCard.module.css";
const ProductCard = ({ product }) => {
  return (
    <article className={styles.card}>
      <Image
        className={styles.img}
        src={product.image}
        width={250}
        height={250}
        alt={product.name}
      />
      <div className={styles.cardFooter}>
        <h6>Kora organics</h6>
        <div className={styles.cardInfo}>
          <p>Noni Glow Sleeping Mask</p>
          <span>$258</span>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
