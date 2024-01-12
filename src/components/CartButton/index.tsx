import {Icon} from "@taikai/rocket-kit";

import styles from "@/components/CartButton/styles.module.css";

export default function CartButton () {
  return (
    <button className={styles.cartButton}>
      <Icon
        icon={"cart"}
        fill={"white"}
        style={{height: "30px"}}
      />
    </button>
  );
}