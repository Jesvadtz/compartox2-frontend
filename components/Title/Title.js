import styles from "./Title.module.scss";

export default function Title({ title }) {
  return <h2 className={styles.title}>{title}</h2>;
}
