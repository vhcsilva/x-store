import {ModalDrawer} from "@taikai/rocket-kit";

import {useAppContext} from "@/stores/app-store";
import ProductOnCart from "@/components/ProductOnCart";

import styles from "./styles.module.css";
import {Product} from "@/types/product";
import {formatToEuro} from "@/utils/formatter";

export default function CartDrawer ({
  isShowing,
  onHide,
}: {
  isShowing: boolean;
  onHide: () => void;
}) {
  const { cart, hasNft } = useAppContext();

  const getDiscount = (product: Product) =>
    hasNft && product.exclusiveDiscount > 0 ? product.price * product.exclusiveDiscount / 100 : 0;
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);
  const totalDiscounts = cart.reduce((acc, curr) => acc + getDiscount(curr), 0);

  return (
    <ModalDrawer
      closeValue="Close"
      hide={onHide}
      isShowing={isShowing}
      title="Checkout"
    >
      <div className={styles.wrapper}>
        {cart.map(item => <ProductOnCart {...item} />)}
      </div>
      <div className={styles.amount}>
        <span>Amount:</span>
        <span>{formatToEuro(total)}</span>
      </div>
      <div className={styles.discounts}>
        <span>Discounts:</span>
        <span>-{formatToEuro(totalDiscounts)}</span>
      </div>
      <div className={styles.amount}>
        <span>Total:</span>
        <span>{formatToEuro(total - totalDiscounts)}</span>
      </div>
    </ModalDrawer>
  );
}