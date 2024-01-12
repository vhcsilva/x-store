import {useState} from "react";
import {Button} from "@taikai/rocket-kit";

import WalletSelectorDrawer from "@/components/WalletSelectorDrawer";

import styles from "@/components/ConnectWalletButton/styles.module.css";

export default function ConnectWalletButton () {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Button
        color={"white"}
        txtColor={"black"}
        value={"Connect Wallet"}
        action={() => setIsShowing(true)}
      />

      <WalletSelectorDrawer
        isShowing={isShowing}
        onHide={() => setIsShowing(false)}
      />
    </div>
  );
}