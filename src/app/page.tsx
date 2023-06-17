"use client";
import styles from "./page.module.css";
import Post from "./components/Posts";
import { useGetPosts } from "./components/useRequest";
import { IPost } from "./types";

export default function Home() {
  const { data: posts, error } = useGetPosts();

  return (
    <main className={styles.main}>
      {posts?.map((post: IPost) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}
