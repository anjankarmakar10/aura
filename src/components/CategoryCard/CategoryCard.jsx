import styles from "./CategoryCard.module.css";

const CategoryCard = () => {
  return (
    <article className={styles.card}>
      <div>
        <img src="/c1.webp" alt="" />
      </div>
      <h5>FACIAL CLEANSERS</h5>
    </article>
  );
};
export default CategoryCard;
