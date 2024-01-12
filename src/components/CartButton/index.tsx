import {Icon} from "@taikai/rocket-kit";

import styles from "@/components/CartButton/styles.module.css";
import {useState} from "react";
import CartDrawer from "@/components/CartDrawer";
import {useAppContext} from "@/stores/app-store";

export default function CartButton () {
  const [isShowing, setIsShowing] = useState(false);

  const { cart } = useAppContext();

  const cartQuantity = cart.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.quantity}>
        {cartQuantity}
      </div>

      <button
        className={styles.cartButton}
        onClick={() => setIsShowing(true)}
      >
        <Icon
          icon={"cart"}
          fill={"white"}
          style={{height: "30px"}}
        />
      </button>

      <CartDrawer
        isShowing={isShowing}
        onHide={() => setIsShowing(false)}
      />
    </div>
  );
}