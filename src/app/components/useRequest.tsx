import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const url = "https://jsonplaceholder.typicode.com/posts";

export const useGetPosts = () => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};

export const getClientPosts = async () => {
  const response = await fetcher(url);
  return response;
};
