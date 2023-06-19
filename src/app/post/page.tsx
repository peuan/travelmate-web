"use client";

import styles from "./page.module.css";
import Post from "@/components/Posts";
import { IPost } from "@/types";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function PostPage() {
  const { data, error } = useGetPosts();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      {(data as IPost[]).map((post: IPost) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}
