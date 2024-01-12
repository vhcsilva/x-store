'use client';

import styles from './page.module.css'
import ProductsList from "@/components/ProductsList";
import ConceptBanner from "@/components/ConceptBanner";

export default function Home() {
  return (
    <>
      <ConceptBanner />
      <main className={styles.main}>
        <ProductsList />
      </main>
    </>
  )
}
