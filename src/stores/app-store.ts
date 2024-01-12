import { create } from "zustand";

import {Product} from "@/types/product";

interface AppContext {
  hasNft: boolean;
  cart: Product[];
  setHasNft: (value: boolean) => void;
  addToCart: (value: Product) => void;
  removeFromCart: (value: Product) => void;
}

export const useAppContext = create<AppContext>((set, get) => ({
  hasNft: false,
  cart: [],
  setHasNft: (hasNft: boolean) => set(() => ({ hasNft })),
  addToCart: (value: Product) => set(() => ({ cart: [...get().cart, value] })),
  removeFromCart: (value: Product) => set(() => ({ cart: get().cart.filter(({name}) => value.name !== name) })),
}));