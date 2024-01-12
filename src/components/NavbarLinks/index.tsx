import styles from "@/components/NavbarLinks/styles.module.css"
import Link from "next/link";

export default function NavbarLinks () {
  return(
    <nav className={styles.wrapper}>
      <Link
        href={"/merchandising"}

      >
        MERCHANDISING
      </Link>
      <Link
        href={"/experiences"}

      >
        EXPERIENCES
      </Link>
      <Link
        href={"/mxx"}

      >
        Mx. X CLUB
      </Link>
      <Link
        href={"/about"}

      >
        ABOUT
      </Link>
    </nav>
  );
}