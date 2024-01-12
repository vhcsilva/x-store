import styles from "@/components/ProductsList/styles.module.css";

import { products } from "@/mocks/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsList () {
  return(
    <div className={styles.wrapper}>
      <div className={styles.featured}>
        <h3>Featured</h3>
        <div className={styles.line}></div>
      </div>

      <div className={styles.listContainer}>
        {products.map(product => <ProductCard key={product.name} {...product} />)}
      </div>
    </div>
  );
}