import Form from "../../components/Form/form";
import styles from "./style.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome to the currency converter</h1>
        <p className={styles.subtitle}>This page is intended to convert currency values.</p>
      </div>

      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
  );
}
