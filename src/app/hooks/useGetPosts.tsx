import { fetcher } from "@/libs/fetcher";
import useSWR from "swr";

const url = "https://jsonplaceholder.typicode.com/posts";

export const useGetPosts = () => {
  const { data, error } = useSWR(url, fetcher);
  const isLoading = !error && !data;

  return { data, error, isLoading };
};
