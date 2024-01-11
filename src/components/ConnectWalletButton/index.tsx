import {useState} from "react";
import {Button, Icon} from "@taikai/rocket-kit";

import WalletSelectorDrawer from "@/components/WalletSelectorDrawer";

import styles from "@/components/ConnectWalletButton/styles.module.css";

export default function ConnectWalletButton () {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className={styles.wrapper}>
      <span>If you are a Mx. X owner, connect your wallet to get exclusive offers</span>

      <Icon
        icon={"arrowRight"}
        fill={"white"}
        style={{height: "20px"}}
      />

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