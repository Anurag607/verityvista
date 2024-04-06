"use client";

import "./globals.css";
import { Rubik } from "next/font/google";
import { ReduxProviders } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import {
  ErrorBoundaryWrapper,
  Navbar,
  ScrollToTop,
  Sidebar,
  OffCanvasPopup,
} from "@/components";
import { Suspense } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { CaretUpOutlined } from "@ant-design/icons";
import useScrollTrigger from "@/custom-hooks/useScrollTrigger";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const rubik = Rubik({ subsets: ["latin"] });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const ScrollTop = ({ children }: { children: React.ReactNode }) => {
  const threshold = 150;
  const trigger = useScrollTrigger({ threshold });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-10 bottom-10 duration-200 ${
        trigger ? "opacity-100" : "opacity-0"
      }`}
    >
      <div onClick={handleClick}>{children}</div>
    </div>
  );
};

export default function RootLayout({ children }: { children: any }) {
  const pathname: any = usePathname();

  const isHomePage = () => {
    return pathname === "/";
  };

  const isAuthPage = () => {
    return pathname === "/login" || pathname === "/register";
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={`A Notion Like Block Editor.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
        />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
        />
        <link
          rel="apple-touch-icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
        />
        <title>{"VerityVista"}</title>
      </head>

      <UserProvider>
      <body
        className={classNames({
          [rubik.className]: true,
          "bg-[url('/BG-1.png')] dark:bg-[url('/BG.png')] bg-center bg-cover bg-no-repeat":
            true,
        })}
        suppressHydrationWarning={true}
      >
        <Suspense fallback={<div />}>
          <ProgressBar
            height="4px"
            color="#1b1b1b"
            options={{ showSpinner: true }}
            shallowRouting
          />
          <ReduxProviders>
            <QueryClientProvider client={queryClient}>
              <ScrollToTop _children={null} />
              <ErrorBoundaryWrapper>
                <div
                  className={classNames({
                    "relative max-w-screen max-h-screen gap-x-0": true,
                    "flex flex-row items-start justify-end": true,
                  })}
                >
                  <div
                    className={classNames({
                      [`relative h-screen ${
                        isAuthPage() ? "w-screen" : "w-[calc(100vw_-_6rem)]"
                      } flex flex-col items-start justify-between`]: true,
                      "mobile:w-screen": true,
                    })}
                  >
                    {!isAuthPage() && <Navbar />}
                    {children}
                    {!isAuthPage() && (
                      <div className={"w-full h-[2rem] bg-transparent"} />
                    )}
                  </div>
                </div>
              </ErrorBoundaryWrapper>
              <ScrollTop>
                <div className="z-[100000001] w-10 h-10 aspect-square rounded-full bg-primary text-white grid place-items-center cursor-pointer">
                  <CaretUpOutlined />
                </div>
              </ScrollTop>
              {!isAuthPage() && <OffCanvasPopup />}
              {!isAuthPage() && <Sidebar />}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            <ToastContainer autoClose={1000} hideProgressBar />
          </ReduxProviders>
        </Suspense>
      </body>
      </UserProvider>
    </html>
  );
}
