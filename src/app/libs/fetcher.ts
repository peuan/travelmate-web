export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

// const fetcher = async <T = Response>(
//   url: string,
//   method: "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "DELETE" | "PATCH",
//   cache?: RequestCache
// ): Promise<T> => {
//   const res = await fetch(url, {
//     method: method ?? "GET",
//     headers: new Headers({ "Content-Type": "application/json" }),
//     credentials: "same-origin",
//     cache: cache ?? "default",
//   });

//   return res.json();
// };
