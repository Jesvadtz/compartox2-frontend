import Link from "next/link";

import styles from "./Note.module.scss";

export default function Note({ note, href }) {
  return (
    <div className={styles.note}>
      <Link href={href}>{note}</Link>
    </div>
  );
}
