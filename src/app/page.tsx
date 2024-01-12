'use client';

import styles from './page.module.css'
import ProductsList from "@/components/ProductsList";
import ConceptBanner from "@/components/ConceptBanner";
import {useEffect, useState} from "react";
import axios from "axios";
import {useAppContext} from "@/stores/app-store";
import {useDappkit} from "dappkit-react";

export default function Home() {
  const { address } = useDappkit();
  const [isFetching, setIsFetching] = useState(false);

  const { setHasNft } = useAppContext();

  useEffect(() => {
    if (!address) {
      setHasNft(false);
      return;
    }
    if (isFetching)
      return;
    setIsFetching(true);
    axios.get(`https://api.opensea.io/api/v2/chain/matic/account/${address}/nfts?collection=layerx-team`, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_OPENSEA_API_KEY
      }
    })
      .then(({ data }) => setHasNft(!!data?.nfts?.length))
      .catch(() => setHasNft(false))
      .finally(() => setIsFetching(false));
  }, [address]);

  return (
    <>
      <ConceptBanner />
      <main className={styles.main}>
        <ProductsList />
      </main>
    </>
  )
}
