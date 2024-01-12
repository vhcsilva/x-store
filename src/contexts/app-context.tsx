import {createContext, ReactNode, useContext, useEffect, useState} from "react";

import {Product} from "@/types/product";
import {useDappkit} from "dappkit-react";
import axios from "axios";

interface AppContext {
  hasNft: boolean;
  cart: Product[];
  addToCart: (value: Product) => void;
  removeFromCart: (value: Product) => void;
}

const appContext: AppContext = {
  hasNft: false,
  cart: [],
  addToCart: (value: Product) => {},
  removeFromCart: (value: Product) => {},
};

export const AppStateContext = createContext(appContext);

export function AppStateContextProvider({children}: { children?: ReactNode }) {
  const { address } = useDappkit();

  const [hasNft, setHasNft] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart (value: Product) {
    setCart(previous => [...previous, value]);
  }

  function removeFromCart (value: Product) {
    setCart(previous => previous.filter(p => p.name !== value.name));
  }

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
    <AppStateContext.Provider value={{ hasNft, cart, addToCart, removeFromCart }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context)
    throw new Error(`useAppState not inside AppStateContext`);

  return context;
}