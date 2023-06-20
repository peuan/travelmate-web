import fetcher from "@/libs/fetcher";
import { IPost } from "@/types";
import useSWR from "swr";

const url = "https://jsonplaceholder.typicode.com/posts";

export const useGetPosts = (fallback?: any) => {
  const { data, error } = useSWR<IPost[]>(url, fetcher, { fallback: { data: fallback } });

  return { data, error };
};
