import fetcher from "../libs/fetcher";
import { IUser } from "../types";

export const useGetUser = async () => {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const data = await fetcher<IUser>(url, { cache: 'no-store' });
    return { data };
};
