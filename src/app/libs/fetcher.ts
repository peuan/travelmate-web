export const fetcher = async <T = Response>(url: string): Promise<T> => {
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
  });

  return res.json();
};
