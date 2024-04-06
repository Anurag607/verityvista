"use client";

import DashboardPage from "@/pages/dashboardPage";
import { getHeadlines } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dummyData from "@/lib/dummyData.json";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(dummyData.articles as any);
    // setIsLoading(true);
    // getHeadlines().then((res) => {
    //   setData(res);
    //   setIsLoading(false);
    // });
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <DashboardPage>
          <div
            className={
              "flex items-start justify-start gap-4 flex-wrap h-fit w-[92.5%] mx-auto relative"
            }
          >
            <div
              className={
                "relative w-[50%] h-[70vh] rounded-lg shadow-lg shadow-[#c5c5c5] dark:shadow-[#333333] bg-neutral-200 p-2 border-2 border-neutral-300 overflow-hidden"
              }
            >
              <div
                className={"relative grid place-items-center cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-full z-[100] bg-gradient-to-t from-neutral-300 opacity-75 to-transparent absolute bottom-0"
                  }
                />
                <img
                  loading="lazy"
                  src={data[0].urlToImage}
                  alt={data[0].title}
                  className="relative w-full h-auto object-cover select-none grayscale rounded-t-2xl fadeout-overlay"
                />
              </div>
              <div className="cursor-default !bg-neutral-500 !bg-opacity-50 glass-effect w-full py-4 pl-4 rounded-b-2xl rounded-t-0 z-50 whitespace-wrap text-sm font-medium grid place-items-left text-white">
                {data[0].title.slice(0, 75)}...
              </div>
              <p className={"mt-4 text-neutral-600 font-medium pl-3"}>
                {data[0].description}
              </p>
              <Link
                href={data[0].url}
                className={
                  "bg-neutral-500 text-white rounded-lg hover:underline cursor-pointer transition-all text-sm p-2 line-clamp-1 truncate mt-6"
                }
              >
                {`${data[0].url.slice(0, 85)}...`}
              </Link>
            </div>
            <div
              className={
                "relative w-[47.5%] h-[70vh] flex flex-col items-around justify-center gap-y-6"
              }
            >
              {[data[1], data[2]].map((el, i) => {
                return (
                  <div
                    key={i}
                    className={
                      "relative w-full h-[33vh] rounded-lg shadow-lg shadow-[#c5c5c5] dark:shadow-[#333333] bg-neutral-200 p-4 border-2 border-neutral-300 flex items-start justify-start gap-x-3"
                    }
                  >
                    <div className="relative w-[52.5%] h-full">
                      <CategoryCard data={el} isLoading={isLoading} />
                    </div>
                    <div
                      className={
                        "h-full flex-1 flex flex-col justify-around items-between overflow-hidden relative"
                      }
                    >
                      <p
                        className={
                          "mt-4 text-neutral-600 font-medium pl-3 line-clamp-5"
                        }
                      >
                        {el.description}
                      </p>
                      <Link
                        href={el.url}
                        className={
                          "bg-neutral-500 text-white rounded-lg hover:!underline !cursor-pointer transition-all text-sm p-2 line-clamp-1 truncate mt-6 w-full"
                        }
                      >
                        {`${el.url.slice(0, 35)}...`}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={"relative w-full grid grid-cols-3 gap-4"}>
              {(data.slice(3, 9) || []).map((el: any, i: number) => {
                return <CategoryCard data={el} isLoading={isLoading} />;
              })}
            </div>
          </div>
        </DashboardPage>
      ) : (
        <></>
      )}
    </>
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
          ? "cursor-default !animate-pulse !bg-neutral-300 h-full w-auto relative rounded-lg"
          : "w-full shrink-0 !cursor-pointer h-full relative"
      }`}
      onClick={handleClick}
    >
      {isLoading ? (
        <div className="glass-effect w-full absolute bottom-0 py-4 pl-4 rounded-t-2xl rounded-b-0 z-50 whitespace-wrap text-sm font-medium grid place-items-left text-white" />
      ) : (
        <div className="w-full h-full overflow-hidden rounded-xl relative cursor-pointer">
          <div
            className={
              "w-full h-2/3 z-[100] bg-gradient-to-t from-neutral-300 opacity-75 to-transparent absolute bottom-0"
            }
          />
          <img
            loading="lazy"
            src={data.urlToImage}
            alt={data.title}
            className="relative w-full h-full object-cover select-none grayscale hover:!scale-110 !cursor-pointer"
          />
          <div className="cursor-pointer !bg-neutral-500 !bg-opacity-50 glass-effect w-full absolute bottom-0 py-4 pl-4 rounded-t-2xl rounded-b-0 z-50 whitespace-wrap text-sm font-medium grid place-items-left text-white truncate line-clamp-1">
            {data.title.slice(0, 35)}...
          </div>
        </div>
      )}
    </div>
  );
};
