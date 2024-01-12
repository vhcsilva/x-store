import Image from "next/image";

import styles from "./styles.module.css";
import {Mxx} from "@/types/mxx";

export default function MxxCard (mxx: Mxx) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={`/static/images/mxx/${mxx.image}`}
        alt={mxx.name}
        width={281}
        height={281}
      />

      <div className={styles.nameWrapper}>
        <h4 className={styles.name}>
          {mxx.name}
        </h4>
      </div>
    </div>
  );
}