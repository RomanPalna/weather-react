import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.eye_outer}>
        <div className={styles.eye_inner}>
          <div className={styles.inner_circle}></div>
        </div>
      </div>
    </div>
  );
}
