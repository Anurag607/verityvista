import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ToastOptions } from "react-toastify";

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
