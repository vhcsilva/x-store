'use client';

import styles from './page.module.css'
import ProductsList from "@/components/ProductsList";
import ConceptBanner from "@/components/ConceptBanner";
import {AppStateContextProvider} from "@/contexts/app-context";

export default function Home() {
  return (
    <AppStateContextProvider>
      <ConceptBanner />
      <main className={styles.main}>
        <ProductsList />
      </main>
    </AppStateContextProvider>
  )
}
