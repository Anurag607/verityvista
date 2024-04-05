import React, { useRef } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next-nprogress-bar";

const Sidebar = () => {
  const router = useRouter();
  const pathname: any = usePathname();
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { authInstance } = useAppSelector((state: any) => state.auth);

  return (
    <div
      className={classNames({
        "flex items-center justify-center z-[100001]": true,
        "bg-[#37352F] text-zinc-50": true,
        "fixed left-0 top-0": true,
        "h-screen mobile:w-[3rem] w-[6rem]": true,
        "transition-all ease-in-out": true,
        "bg-center bg-cover bg-no-repeat": true,
      })}
      ref={ref}
    ></div>
  );
};
export default Sidebar;
