'use client';

import {ReactNode, useEffect, useState} from "react";
import axios from "axios";
import {useDappkit} from "dappkit-react";

import {useAppContext} from "@/stores/app-store";

export default function RootProvider ({
  children
}: {
  children?: ReactNode;
}) {
  const { address } = useDappkit();
  const [isFetching, setIsFetching] = useState(false);

  const { setHasNft, clearCart } = useAppContext();

  useEffect(() => {
    if (!address) {
      setHasNft(false);
      clearCart();
      return;
    }
    clearCart();
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
      {children}
    </>
  );
}