import {Product} from "@/types/product";

import styles from "./styles.module.css";
import Image from "next/image";
import {formatToEuro} from "@/utils/formatter";
import {useAppContext} from "@/stores/app-store";
import {Button} from "@taikai/rocket-kit";

export default function ProductOnCart (product: Product) {
  const { hasNft, removeFromCart } = useAppContext();

  const discount = hasNft && product.exclusiveDiscount > 0 ? product.price * product.exclusiveDiscount / 100 : 0;
  const hasDiscount = discount > 0;
  const priceSubDiscount = product.price - discount;

  return (
    <div className={styles.wrapper}>
      <Image
        src={`/static/images/${product.image}`}
        alt={product.name}
        width={100}
        height={100}
      />

      <div className={styles.nameAndPriceWrapper}>
        <span>{product.name}</span>
        <div className={styles.prices}>
          <h5 className={`${styles.price} ${hasDiscount ? styles.priceWithDiscount: ""}`}>
            {formatToEuro(product.price)}
          </h5>
          {hasDiscount &&
              <h5 className={styles.discount}>
                {formatToEuro(priceSubDiscount)}
              </h5>
          }
        </div>
      </div>

      <Button
        color={"red500"}
        icon={"delete"}
        action={() => removeFromCart(product)}
      />
    </div>
  );
}