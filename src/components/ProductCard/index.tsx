import Image from "next/image";
import {Button, Tag} from "@taikai/rocket-kit";

import {Product} from "@/types/product";
import styles from "@/components/ProductCard/styles.module.css"
import {formatToEuro} from "@/utils/formatter";
import {useAppContext} from "@/stores/app-store";
import {useDappkit} from "dappkit-react";

export default function ProductCard (product: Product) {
  const { address } = useDappkit();

  const { hasNft, addToCart } = useAppContext();

  const discount = hasNft && product.exclusiveDiscount > 0 ? product.price * product.exclusiveDiscount / 100 : 0;
  const hasDiscount = discount > 0;
  const priceSubDiscount = product.price - discount;

  return (
    <div className={styles.wrapper}>
      { (product.exclusive && !hasNft) && <Tag
          color="yellow500"
          txtColor="black"
          value="Exclusive Mx.X owners"
          variant="solid"
          className={styles.nftOwnersTag}
      />}
      <Image
        src={`/static/images/${product.image}`}
        alt={product.name}
        width={200}
        height={230}
      />

      <h4 className={styles.name}>
        {product.name}
      </h4>

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

      <div className={styles.addToCartButtonContainer}>
        {((!product.exclusive || hasNft) && !!address) &&
          <Button
            value={"Add to cart"}
            icon={"cart"}
            action={() => addToCart(product)}
          />
        }
      </div>
    </div>
  );
}