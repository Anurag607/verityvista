"use client";

import DashboardPage from "@/_pages/dashboardPage";
import { downvotePost, getAllPosts, upvotePost } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import dummyData from "@/lib/dummyData.json";
import Link from "next/link";
import { updateData } from "@/redux/reducers/searchSlice";
import { ContentPopup } from "@/components";
import { TiArrowDownOutline, TiArrowDownThick, TiArrowUpOutline, TiArrowUpThick } from "react-icons/ti";
import classNames from "classnames";
import { setVote } from "@/redux/reducers/voteSlice";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const matchingData = useAppSelector(
    (state: any) => state.searchBar.matchingData
  );
  const [currentArticle, setCurrentArticle] = useState<any>(null);
  const votes = useAppSelector((state: any) => state.vote.votes);
  const role = useAppSelector((state: any) => state.auth.role);

  useEffect(() => {
    setIsLoading(true);
    getAllPosts().then((res: string[]) => {
      dispatch(updateData(res));
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {currentArticle && (
        <ContentPopup
          data={currentArticle}
          close={() => setCurrentArticle(null)}
        />
      )}
      <DashboardPage>
        {matchingData &&
        matchingData !== undefined &&
        matchingData.length > 0 ? (
          <div
            className={
              "flex items-start justify-start gap-4 flex-wrap h-fit w-[92.5%] mx-auto relative"
            }
          >
            <div
              className={
                "flex flex-col items-between justify-start relative w-[50%] h-[70vh] rounded-lg shadow-lg shadow-[#c5c5c5] dark:shadow-[#333333] bg-neutral-200 p-2 border-2 border-neutral-300 overflow-hidden"
              }
            >
              <div
                className={
                  "flex-1 rounded-t-2xl relative grid place-items-center cursor-pointer"
                }
              >
                <div
                  className={
                    "flex-1 w-full h-full z-[100] bg-gradient-to-t from-neutral-300 opacity-75 to-transparent absolute bottom-0"
                  }
                />
                <img
                  loading="lazy"
                  src={
                    matchingData[0].imageLink.length > 0
                      ? matchingData[0].imageLink
                      : `/placeholder.svg`
                  }
                  alt={matchingData[0].heading}
                  className="relative w-full h-full object-cover select-none grayscale rounded-t-2xl fadeout-overlay"
                />
              </div>
              <div className="flex items-center justify-between px-5 cursor-default !bg-neutral-500 !bg-opacity-50 glass-effect w-full py-4 pl-4 rounded-b-2xl rounded-t-0 z-50 whitespace-wrap text-sm font-medium  text-white">
                {matchingData[0].heading.slice(0, 75)}...
                {user && (
                  <div
                    className={
                      "border-2 border-neutral-500 rounded-full flex items-center justify-center gap-x-1 px-2 py-1 w-fit"
                    }
                  >
                    <div className="flex items-center justify-center gap-x-1 border-r-2 border-neutral-300 pr-3">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          upvotePost(matchingData[0].id,role.display_name)
                          dispatch(
                            setVote({ id: matchingData[0].id, vote: 1 })
                          );
                        }}
                      >
                        {votes !== undefined &&
                        votes.hasOwnProperty(matchingData[0].id) &&
                        votes[matchingData[0].id] === 1 ? (
                          <TiArrowUpThick size={24} />
                        ) : (
                          <TiArrowUpOutline size={24} />
                        )}
                      </div>
                      <p className="text-lg font-bold">
                        {Math.abs(
                          matchingData[0].upvote -
                            matchingData[0].downvote +
                            (votes[matchingData[0].id] || 0)
                        )}
                      </p>
                    </div>
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        downvotePost(matchingData[0].id,role.display_name)
                        dispatch(setVote({ id: matchingData[0].id, vote: 0 }));
                      }}
                    >
                      {votes !== undefined &&
                      votes.hasOwnProperty(matchingData[0].id) &&
                      votes[matchingData[0].id] === 0 ? (
                        <TiArrowDownThick size={24} />
                      ) : (
                        <TiArrowDownOutline size={24} />
                      )}
                    </div>
                  </div>
                )}
              </div>
              <p
                className={
                  "mt-4 text-neutral-600 font-medium pl-3 line-clamp-3"
                }
              >
                {matchingData[0].content}
              </p>
              <Link
                href={matchingData[0].refLink}
                className={
                  "bg-neutral-500 text-white rounded-lg hover:underline cursor-pointer transition-all text-sm p-2 line-clamp-1 truncate mt-6"
                }
              >
                {`${matchingData[0].refLink.slice(0, 85)}...`}
              </Link>
            </div>
            {matchingData !== undefined &&
            matchingData !== null &&
            matchingData.length > 1 ? (
              <div
                className={
                  "relative w-[47.5%] h-[70vh] flex flex-col items-around justify-start gap-y-6"
                }
              >
                {[matchingData[1], matchingData[2]].map((el, i) => {
                  if (el === undefined) return null;
                  return (
                    <div
                      key={i}
                      className={
                        "relative w-full h-[33vh] rounded-lg shadow-lg shadow-[#c5c5c5] dark:shadow-[#333333] bg-neutral-200 p-4 border-2 border-neutral-300 flex items-start justify-start gap-x-3"
                      }
                    >
                      <div className="relative w-[52.5%] h-full">
                        <CategoryCard
                          data={el}
                          setCurrentArticle={setCurrentArticle}
                          isLoading={isLoading}
                        />
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
                          {el.content}
                        </p>
                        <Link
                          href={el.refLink}
                          className={
                            "bg-neutral-500 text-white rounded-lg hover:!underline !cursor-pointer transition-all text-sm p-2 line-clamp-1 truncate mt-6 w-full"
                          }
                        >
                          {`${el.refLink.slice(0, 35)}...`}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}

            {matchingData !== undefined &&
            matchingData !== null &&
            matchingData.length > 3 ? (
              <div className={"relative w-full grid grid-cols-3 gap-4"}>
                {(matchingData.slice(3, 9) || []).map((el: any, i: number) => {
                  return (
                    <CategoryCard
                      key={i}
                      data={el}
                      setCurrentArticle={setCurrentArticle}
                      isLoading={isLoading}
                    />
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="w-full h-full relative flex flex-col justify-center items-center gap-3 pr-[0rem] sm:pr-[4rem] md:pr-[6rem] mx-auto">
            <img
              height={400}
              width={400}
              alt={"NotFound"}
              src="/bw-nf.png"
              className={classNames({
                "brightness-[40%] dark:brightness-100 w-[17.5rem] xl:w-[20rem]":
                  true,
              })}
            />
            <div className="relative flex flex-col justify-center items-center gap-2 mobile:gap-1 mb-[2.5rem]">
              <h4 className="rubik text-primary font-bold text-2xl text-center mobile:text-[1.25rem]">
                Nothing here Yet!...
              </h4>
            </div>
          </div>
        )}
      </DashboardPage>
    </>
  );
}

const CategoryCard = ({ data, setCurrentArticle, isLoading }: any) => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const votes = useAppSelector((state: any) => state.vote.votes);
  const role = useAppSelector((state: any) => state.auth.role);


  const handleClick = (e: any) => {
    e.preventDefault();
    setCurrentArticle(data);
  };

  return (
    <div
      key={data.id}
      className={`${
        isLoading
          ? "cursor-default !animate-pulse !bg-neutral-300 h-full w-auto relative rounded-lg"
          : "w-full shrink-0 !cursor-pointer h-full relative"
      }`}
    >
      {isLoading ? (
        <div className="glass-effect w-full absolute bottom-0 py-4 pl-4 rounded-t-2xl rounded-b-0 z-50 whitespace-wrap text-sm font-medium grid place-items-left text-white" />
      ) : (
        <div className="w-full h-full overflow-hidden rounded-xl relative cursor-pointer">
          <img
            loading="lazy"
            src={
              data.imageLink.length > 0 ? data.imageLink : `/placeholder.svg`
            }
            alt={data.heading}
            onClick={handleClick}
            className="relative w-full h-full !min-h-[215px] object-cover select-none grayscale hover:!scale-110 !cursor-pointer"
          />
          <div
            onClick={handleClick}
            className={
              "w-full h-2/3 z-[100] bg-gradient-to-t from-neutral-300 opacity-75 to-transparent absolute bottom-0 cursor-pointer"
            }
          />
          <div className="!z-[101] flex items-center justify-between px-4 cursor-pointer !bg-neutral-500 !bg-opacity-50 glass-effect w-full absolute bottom-0 py-4 pl-4 rounded-t-2xl rounded-b-0 whitespace-wrap text-sm font-medium text-white truncate line-clamp-1">
            <p>{data.heading.slice(0, 35)}...</p>
            {user && (
              <div
                className={
                  "border-2 border-neutral-500 rounded-full flex items-center justify-center gap-x-1 px-2 py-1"
                }
              >
                <div className="flex items-center justify-center gap-x-1 border-r-2 border-neutral-300 pr-3">
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      upvotePost(data.id,role.display_name);
                      dispatch(setVote({ id: data.id, vote: 1 }));
                    }}
                  >
                    {votes !== undefined &&
                    votes.hasOwnProperty(data.id) &&
                    votes[data.id] === 1 ? (
                      <TiArrowUpThick size={24} />
                    ) : (
                      <TiArrowUpOutline size={24} />
                    )}
                  </div>
                  <p className="text-lg font-bold">
                    {Math.abs(
                      data.upvote - data.downvote + (votes[data.id] || 0)
                    )}
                  </p>
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    downvotePost(data.id,role.display_name);
                    dispatch(setVote({ id: data.id, vote: 0 }));
                  }}
                >
                  {votes !== undefined &&
                  votes.hasOwnProperty(data.id) &&
                  votes[data.id] === 0 ? (
                    <TiArrowDownThick size={24} />
                  ) : (
                    <TiArrowDownOutline size={24} />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
