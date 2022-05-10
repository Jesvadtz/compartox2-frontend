import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/compartox2-yellow.svg"
        width="80px"
        height="30px"
        alt="compartox2-logo"
      />
      <p>©CompartoX2 by Jessica Vargas</p>
    </footer>
  );
}
