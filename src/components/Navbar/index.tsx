'use client';

import {useDappkit} from "dappkit-react";

import LayerXLogo from "@/components/LayerXLogo";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import CartButton from "@/components/CartButton";

import styles from './styles.module.css';

export default function Navbar() {
  const { address } = useDappkit();

  return (
    <div className={styles.wrapper}>
      <a href="/" className={styles.logo}>
        <LayerXLogo/>
      </a>

      { address ? <CartButton /> : <ConnectWalletButton />}
    </div>
  );
}