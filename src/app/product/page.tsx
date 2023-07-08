
import { useGetUser } from "../../hooks/useGetUser";
import styles from "./page.module.css";

export default async function ProductPage() {
  const { data } = await useGetUser()
  return (
    <main className={styles.main}>
      <h1>Server Side</h1>
      <h1>{data.email}</h1>
    </main>
  );
}
