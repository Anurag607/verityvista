import React from "react";
import classNames from "classnames";
import DarkMode from "../DarkMode";
import Image from "next/image";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { openSidebar } from "@/redux/reducers/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next-nprogress-bar";
import { destroyAuthInstance } from "@/redux/reducers/authSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state: any) => state.sidebar);
  const { authInstance } = useAppSelector((state: any) => state.auth);

  React.useEffect(() => {
    if (!authInstance) {
      router.push(`/`);
    }
  }, [authInstance]);

  return (
    <nav
      className={classNames({
        "pl-10 mt-4": true,
        "bg-transparent z-[1000]": true, // colors
        "flex items-center justify-between mobile:px-0 pr-10": true, // layout
        "w-full relative py-3 h-fit": true, //positioning & styling
        "mobile:pl-[0.75rem]": true,
        "dark:shadow-[0px_1px_2px_0_rgba(255,255,255,0.1)] shadow": false, //dark-mode and shadow
      })}
    >
      <div className="w-fit h-fit flex justify-center items-center gap-4 relative">
        <div
          onClick={() => dispatch(openSidebar())}
          className={classNames({
            hidden: true,
            "mobile:w-[32px] mobile:h-[32px] w-[42px] h-[42px] items-center justify-center":
              true,
            [`${
              !isSidebarOpen
                ? "bg-primary text-main"
                : "bg-[#e8e8e8] text-[#37474f]"
            } mobile:text-[0.95rem] text-3xl rounded-r-lg`]: true,
            "z-[100001] transition-all": true,
            "fixed left-0": true,
          })}
        >
          {isSidebarOpen ? <CaretLeftOutlined /> : <CaretRightOutlined />}
        </div>
        <div
          onClick={() => router.push("/")}
          className="w-fit h-fit flex justify-center items-center gap-2 relative cursor-pointer"
        >
          <Image
            src={`/logo.png`}
            width={42}
            height={42}
            alt="logo"
            className={`dark:invert sm:w-[42px] sm:h-[42px] w-[32px] h-[32px] cursor-pointer`}
          />
          <h3
            className={classNames({
              "mobile:text-lg bound font-bold text-xl sm:text-2xl text-primary":
                true,
              "flex justify-center items-center gap-4 cursor-pointer": true,
            })}
          >
            {"VerityVista"}
          </h3>
        </div>
      </div>
      <div className={`flex gap-x-2 items-center justify-center`}>
        <DarkMode />
        {authInstance && (
          <button
            onClick={() => {
              dispatch(destroyAuthInstance());
            }}
            className={classNames({
              "text-primary font-normal bound text-[1.75rem]": true,
              "flex justify-center items-center gap-2 cursor-pointer": true,
              "bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700":
                true,
              "px-2 py-1 rounded-md": true,
            })}
          >
            <LogoutOutlined />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
