'use client';

import {useDappkit} from "dappkit-react";

import LayerXLogo from "@/components/LayerXLogo";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import CartButton from "@/components/CartButton";

import styles from './styles.module.css';
import TopBanner from "@/components/TopBanner";
import NavbarLinks from "@/components/NavbarLinks";
import Link from "next/link";

export default function Navbar() {
  const { address } = useDappkit();

  return (
    <div className={styles.wrapper} id="navbar">
      { address ? <></> : <TopBanner />}

      <div className={styles.container}>
        <div></div>
        <Link href="/" className={styles.logo}>
          <LayerXLogo />
        </Link>

        { address ? <CartButton /> : <ConnectWalletButton />}
      </div>

      <NavbarLinks />
    </div>
  );
}