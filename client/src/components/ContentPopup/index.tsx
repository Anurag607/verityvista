import classNames from "classnames";
import Link from "next/link";

const ContentPopup = ({ data, close }: any) => {
  return (
    <div
      className={classNames({
        "fixed top-0 left-0 w-full h-full z-[100000]": true,
        "flex items-center justify-center": true,
        "bg-gray-800 bg-opacity-50": true,
      })}
    >
      <div className="relative bg-white mobile:w-[95vw] rounded-lg px-4 py-8 shadow-lg w-[39rem] dark:bg-neutral-800">
        {/* Close Button... */}
        <button
          className={classNames({
            "absolute top-1 right-1": true,
            "inline-flex items-center": true,
            "rounded-lg text-sm p-1.5 ml-auto": true,
            "hover:bg-gray-200 hover:text-gray-900": true,
            "text-gray-400 bg-transparent": true,
            "dark:hover:bg-gray-800 dark:hover:text-white": true,
          })}
          onClick={close}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className={"flex flex-col w-full relative"}>
          <div className={"relative grid place-items-center cursor-pointer"}>
            <div
              className={
                "w-full h-full z-[100] bg-gradient-to-t from-neutral-300 opacity-75 to-transparent absolute bottom-0"
              }
            />
            <img
              loading="lazy"
              src={data.urlToImage}
              alt={data.title}
              className="relative w-full h-auto object-cover select-none grayscale rounded-t-2xl fadeout-overlay"
            />
          </div>
          <div className="cursor-default !bg-neutral-500 !bg-opacity-50 glass-effect w-full py-4 pl-4 rounded-b-2xl rounded-t-0 z-50 whitespace-wrap text-sm font-medium grid place-items-left text-white">
            {data.title.slice(0, 75)}...
          </div>
          <p className={"mt-4 text-neutral-600 font-medium pl-3 line-clamp-3"}>
            {data.description}
          </p>
          <Link
            href={data.url}
            className={
              "bg-neutral-500 text-white rounded-lg hover:underline cursor-pointer transition-all text-sm p-2 line-clamp-1 truncate mt-6"
            }
          >
            {`${data.url.slice(0, 75)}...`}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentPopup;
