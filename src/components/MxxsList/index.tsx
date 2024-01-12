import styles from "@/components/ProductsList/styles.module.css";

import { mxss } from "@/mocks/mxx-club";
import MxxCard from "@/components/MxxCard";

export default function MxxsList () {
  return(
    <div className={styles.wrapper}>
      <div className={styles.featured}>
        <h3>Mx. Xs</h3>
        <div className={styles.line}></div>
      </div>

      <div className={styles.listContainer}>
        {mxss.map(mxx => <MxxCard key={mxx.name} {...mxx} />)}
        <div className={styles.openSeaLinkWrapper}>
          <a href="https://opensea.io/collection/layerx-team" title="View on OpenSea" target="_blank"><img
            style={{width: "220px", borderRadius: "5px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)"}}
            src="https://storage.googleapis.com/opensea-static/Badge/Badge%20-%20Available%20On%20-%20Light.png"
            alt="Available on OpenSea"/></a>
        </div>
      </div>
    </div>
  );
}