import React from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSearchParams } from "@/redux/reducers/searchSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const { searchParams } = useAppSelector((state: any) => state.searchBar);

  const changleEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchText = event.currentTarget.value;
    dispatch(setSearchParams(searchText));
  };

  return (
    <div
      className={classNames({
        "relative flex items-center justify-center": true,
        "lg:w-fit mr-1": true,
      })}
    >
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          className={classNames({
            "block p-2 pl-10 w-[105%] bg-white": true, //display, padding, width and bg styling
            "text-sm text-neutral-800": true, //text styling
            "border border-gray-300 rounded-lg": true, //border styling
            "focus:ring-blue-500 focus:border-blue-500": true, //on focus styling
            "dark:focus:ring-blue-500 dark:focus:border-blue-500": true, //on focus (dark) styling
            "dark:bg-neutral-800 dark:border-neutral-600": true, // bg and border (dark) stylings
            "dark:placeholder-gray-400 dark:text-white": true, //text (dark) styling
            //cursor and focus
            "cursor-text focus:!border-neutral-800 focus:!outline-neutral-800":
              true,
          })}
          placeholder="Search for items"
          value={searchParams}
          onChange={changleEventHandler}
        />
      </div>
    </div>
  );
};

export default Search;
