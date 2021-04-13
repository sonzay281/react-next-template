import axios from "axios";
import router from "next/router";
import Cookie, { set, remove } from "js-cookie";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "/",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers[process.env.NEXT_PUBLIC_TOKEN_NAME] =
    process.env.NEXT_PUBLIC_TOKEN_VALUE;
  const token = Cookie.get(process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME);
  if (!!token) config.headers[process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME] = token;
  return config;
});

http.interceptors.response.use(
  (response) => {
    if (response?.headers[process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME]) {
      set(
        process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME,
        response?.headers[process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME]
      );
    }

    return response;
    // return Promise.reject(response.data?.message);
  },
  (error) => {
    const { response } = error;
    if (typeof window !== "undefined")
      if (response?.status === 401) {
        remove(process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME);
        router.push("/auth/login", "/auth/login?authError=true");
      }
    return Promise.reject(error);
  }
);

export const del = (url) => http.delete(url);

export const get = ({ url }) => http.get(url);

export const put = ({ url, data }) => http.put(url, data);

export const post = ({ url, data }) => http.post(url, data);

export const patch = ({ url, data }) => http.patch(url, data);
