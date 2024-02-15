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
        <h6 title={product.name} className="line-clamp-1">
          {product.name}
        </h6>
        <div className={styles.cardInfo}>
          <p title={product.info} className="line-clamp-1">
            {product.info}
          </p>
          <span>${product.price}</span>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
