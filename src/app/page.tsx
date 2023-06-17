"use client";
import styles from "./page.module.css";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button variant="contained">Hello World</Button>
    </main>
  );
}
