'use client';

import styles from "./styles.module.css";
import ProductsList from "@/components/ProductsList";

export default function Merchandising() {
  return (
    <main className={styles.wrapper}>
      <ProductsList
        title={"Merchadising"}
      />
    </main>
  )
}
