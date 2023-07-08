"use client";

import styles from "./page.module.css";
import Post from "../../components/Posts";
import { IPost } from "../../types";
import { useGetPosts } from "../../hooks/useGetPosts";

export default function PostPage() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, error } = useGetPosts()

  if (error) return <div>failed to load</div>
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <h1>Client Side</h1>
      {data.map((post: IPost) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}
