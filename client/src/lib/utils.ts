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
