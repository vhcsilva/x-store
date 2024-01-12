import styles from "@/components/TopBanner/styles.module.css";

export default function TopBanner () {
  return(
    <div className={styles.wrapper}>
      <span>
        If you are a Mx. X owner, connect your wallet to get exclusive offers.
      </span>
    </div>
  );
}