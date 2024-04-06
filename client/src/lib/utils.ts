import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ToastOptions } from "react-toastify";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ToastConfig: ToastOptions<any> = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const getArticles = async (topic: string) => {
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=${topic}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
  );

  return res.data.articles;
};

export const getFirstTimeStatus = async (user: any) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_RENDER_SERVER}/checkreg`,
    { email: user }
  );

  return data;
};

export const getAllPosts = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_RENDER_SERVER}/fact/factmodels/`
  );

  return data;
};

export const getPostById = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_RENDER_SERVER}/fact/factmodels/${id}`
  );

  return data;
};

export const getPostByCategory = async (category: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_RENDER_SERVER}/fact/factmodels/?category=${category}`
  );

  return data;
};

export const upvotePost = async (id: string) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_RENDER_SERVER}/fact/factmodels/${id}/upvote/`
  );

  return data;
};

export const downvotePost = async (id: string) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_RENDER_SERVER}/fact/factmodels/${id}/downvote/`
  );

  return data;
};

// response = {message: "", response: ""}
export const addResponse = async (id: string, body: any) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_RENDER_SERVER}/fact/factres/${id}/response/`,
    body
  );

  return data;
};
