import styles from "./Subtitle.module.scss";

export default function Subtitle({ subtitle }) {
  return <h4 className={styles.subtitle}>{subtitle}</h4>;
}
