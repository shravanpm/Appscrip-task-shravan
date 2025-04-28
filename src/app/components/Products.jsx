import ProductCard from "./ProductCard";
import styles from "../styles/Products.module.css";

const productListRes = await fetch("https://fakestoreapi.com/products");
const productList = await productListRes.json();
export const Products = () => {
  return (
    <div
      className={styles.products}
      style={{ backgroundColor: "white", color: "black" }}
    >
      {productList?.length > 0 &&
        productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
