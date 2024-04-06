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
        "h-screen mobile:w-[3rem] w-[5.5rem]": true,
        "transition-all ease-in-out": true,
        "bg-center bg-cover bg-no-repeat": true,
      })}
      ref={ref}
    >
      <div
        className={
          "w-full h-full z-[100] bg-gradient-to-tr from-neutral-300 opacity-25 to-transparent absolute bottom-0"
        }
      />
    </div>
  );
};
export default Sidebar;
