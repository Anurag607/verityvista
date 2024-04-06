import React from "react";
import classNames from "classnames";
import { Search } from "@/components";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={classNames({
        "relative py-4": true,
        "flex flex-col items-start justify-start gap-8": true,
        "h-full w-full": true,
        "overflow-x-hidden": true,
        "bg-primary": false,
      })}
    >
      <div
        className={classNames({
          "h-[8vh] mobile:w-screen w-full": true,
          "flex items-start justify-start gap-4": true,
          "mobile:justify-center": true,
        })}
      >
        <Search />
      </div>
      {children}
    </div>
  );
};

export default HomePage;
