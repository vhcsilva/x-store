import {Product} from "@/types/product";

import styles from "@/components/ProductCard/styles.module.css"
import Image from "next/image";
import {formatToEuro} from "@/utils/formatter";
import {Button, Tag} from "@taikai/rocket-kit";
import {useAppState} from "@/contexts/app-context";

export default function ProductCard (product: Product) {
  const { hasNft } = useAppState();

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

      <h5 className={styles.price}>
        {formatToEuro(product.price)}
      </h5>

      <div className={styles.addToCartButtonContainer}>
        { (!product.exclusive || hasNft) &&
          <Button
            value={"Add to cart"}
            icon={"cart"}
          />
        }
      </div>
    </div>
  );
}