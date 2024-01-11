import {ModalDrawer} from "@taikai/rocket-kit";
import {WalletSelector} from "dappkit-react";

export default function WalletSelectorDrawer ({
  isShowing,
  onHide,
}: {
  isShowing: boolean;
  onHide: () => void;
}) {
  return (
    <ModalDrawer
      closeValue="Close"
      hide={onHide}
      isShowing={isShowing}
      title="Voting Cart Checkout"
    >
      <WalletSelector
        availableWallets={["Metamask", "Coinbase"]}
        onConnectorConnect={onHide}
      />
    </ModalDrawer>
  );
}