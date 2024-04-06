"use client";

import DashboardPage from "@/pages/dashboardPage";
import { getHeadlines } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dummyData from "@/lib/dummyData.json";
import classNames from "classnames";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    // getHeadlines().then((res) => {
    //   setData(res);
    //   setIsLoading(false);
    // });
  }, []);

  return (
    <DashboardPage>
      <div
        className={
          "flex items-start justify-start gap-4 flex-wrap h-fit w-[92.5%] mx-auto"
        }
      >
        {(dummyData.articles || []).map((el: any, i: number) => {
          return <CategoryCard data={el} isLoading={isLoading} />;
        })}
      </div>
    </DashboardPage>
  );
}

const CategoryCard = ({ data, isLoading }: any) => {
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      key={data}
      className={`${
        isLoading
          ? "cursor-default !animate-pulse !bg-neutral-300 h-[215.43PX] w-auto rounded-lg"
          : "w-60 shrink-0 cursor-pointer h-fit"
      }`}
      onMouseUp={handleClick}
    >
      {isLoading ? (
        <div className="glass-effect w-full absolute bottom-0 py-4 pl-4 rounded-t-2xl rounded-b-0 z-50 whitespace-wrap text-sm font-medium grid place-items-left text-white" />
      ) : (
        <div className="isolate w-full overflow-hidden rounded-xl relative">
          <img
            loading="lazy"
            src={data.urlToImage}
            alt={data.title}
            className="relative w-auto h-[215.43px] object-cover select-none grayscale"
          />
          <div className="!bg-neutral-500 !bg-opacity-50 glass-effect w-full absolute bottom-0 py-4 pl-4 rounded-t-2xl rounded-b-0 z-50 whitespace-wrap text-sm font-medium grid place-items-left text-white">
            {data.title.slice(0, 10)}...
          </div>
        </div>
      )}
    </div>
  );
};
