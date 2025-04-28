import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <div>
        <h4>{product.title}</h4>
      </div>
      <p>{product.price}</p>
    </div>
  );
}
