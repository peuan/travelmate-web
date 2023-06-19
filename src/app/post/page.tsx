"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Post from "@/components/Posts";
import { getClientPosts, useGetPosts } from "@/components/useRequest";
import { IPost } from "@/types";

export default function PostPage() {
  const [clientPosts, setClientPosts] = useState<IPost[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getClientPosts();
      setClientPosts(posts);
    };

    fetchPosts();
  }, []);

  const { data: serverPosts } = useGetPosts();

  const posts = clientPosts || serverPosts?.data;

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      {posts.map((post: IPost) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}
