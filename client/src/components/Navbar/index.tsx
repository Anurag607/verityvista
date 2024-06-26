import React from "react";
import classNames from "classnames";
import DarkMode from "../DarkMode";
import Image from "next/image";
import { LogoutOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next-nprogress-bar";
import {
  destroyAuthInstance,
  setAuthInstance,
  setRole,
} from "@/redux/reducers/authSlice";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getFirstTimeStatus } from "@/lib/utils";
import { openForm, openPostForm } from "@/redux/reducers/formSlice";

const Navbar = () => {
  const router = useRouter();
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { authInstance } = useAppSelector((state: any) => state.auth);

  const handleOpenForm = () => {
    dispatch(openPostForm());
  };

  React.useEffect(() => {
    if (user) {
      dispatch(setAuthInstance(user));
      getFirstTimeStatus(user.email).then((res) => {
        if (res.status === 200) {
          dispatch(openForm());
        } else {
          dispatch(setRole(res.payload));
        }
      });
    }
  }, [user, dispatch]);

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
        {user ? (
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
            <>
              <a href="/api/auth/logout">
                <LogoutOutlined />
              </a>
            </>
          </button>
        ) : (
          <Link
            href="/api/auth/login"
            className={classNames({
              "text-primary font-normal bound text-sm": true,
              "mobile-sm:hidden flex justify-center items-center gap-2 cursor-pointer":
                true,
              "bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700":
                true,
              "px-2 py-1 mt-2 rounded-md": true,
            })}
          >
            {"Login"}
          </Link>
        )}
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
