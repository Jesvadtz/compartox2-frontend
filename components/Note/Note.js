import Link from "next/link";

import styles from "./Note.module.scss";

export default function Note({ note }) {
  return (
    <div className={styles.note}>
      <Link href="/">{note}</Link>
    </div>
  );
}
