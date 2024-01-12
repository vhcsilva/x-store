'use client';

import styles from "@/app/about/page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <main className={styles.wrapper}>
      <h1>Builders</h1>
      <div className={styles.team}>
        <div className={styles.member}>
          <Image
            src={"/static/images/daniela-silva.webp"}
            width={150}
            height={150}
            alt={"Daniela Silva"}
          />
          <span>Daniela Silva</span>
        </div>

        <div className={styles.member}>
          <Image
            src={"/static/images/henrique-silva.webp"}
            width={150}
            height={150}
            alt={"Henrique Silva"}
          />
          <span>Henrique Silva</span>
        </div>

        <div className={styles.member}>
          <Image
            src={"/static/images/lucas-porto.webp"}
            width={150}
            height={150}
            alt={"Lucas Porto"}
          />
          <span>Lucas Porto</span>
        </div>

        <div className={styles.member}>
          <Image
            src={"/static/images/vitor-hugo.webp"}
            width={150}
            height={150}
            alt={"Vitor Hugo"}
          />
          <span>Vitor Hugo</span>
        </div>
      </div>
    </main>
  )
}
