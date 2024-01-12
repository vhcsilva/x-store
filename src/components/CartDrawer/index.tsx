import {ModalDrawer} from "@taikai/rocket-kit";
import {useAppContext} from "@/stores/app-store";
import ProductOnCart from "@/components/ProductOnCart";

export default function CartDrawer ({
  isShowing,
  onHide,
}: {
  isShowing: boolean;
  onHide: () => void;
}) {
  const { cart } = useAppContext();

  return (
    <ModalDrawer
      closeValue="Close"
      hide={onHide}
      isShowing={isShowing}
      title="Checkout"
    >
      <div>
        {cart.map(item => <ProductOnCart {...item} />)}
      </div>
    </ModalDrawer>
  );
}