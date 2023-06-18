"use client";
import styles from "./page.module.css";
import Post from "./components/Posts";
import { useGetPosts } from "./components/useRequest";
import { IPost } from "./types";
import Link from "next/link";

export default function Main() {
  const { data: posts } = useGetPosts();

  return (
    <>
      <Link href="/about">About Page</Link>
      <main className={styles.main}>
        {posts?.map((post: IPost) => (
          <Post post={post} key={post.id} />
        ))}
      </main>
    </>
  );
}
