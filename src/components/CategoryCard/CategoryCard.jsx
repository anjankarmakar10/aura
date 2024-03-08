import styles from "./CategoryCard.module.css";

const CategoryCard = ({ category }) => {
  return (
    <article className={styles.card}>
      <div>
        <img src={category.image} alt={category.label} />
      </div>
      <h5>{category.label}</h5>
    </article>
  );
};
export default CategoryCard;
