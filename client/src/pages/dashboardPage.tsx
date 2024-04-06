import React from "react";
import classNames from "classnames";
import { Search, Filter, ContentPopup } from "@/components";
import { useSelector } from "react-redux";
import AddFormPopup from "@/components/Forms/add_form";

const DashboardPage = ({ children }: { children: React.ReactNode }) => {
  const isFormOpem = useSelector((state: any) => state.form.isFormOpen);
  const isContentOpem = useSelector(
    (state: any) => state.content.isContentOpen
  );
  return (
    <div
      className={classNames({
        "relative py-4 pr-4 pl-2": true,
        "flex flex-col items-start justify-start gap-8": true,
        "h-screen w-full": true,
        "overflow-x-hidden": true,
        "bg-primary": false,
      })}
    >
      <div
        className={classNames({
          "h-[8vh] w-full ml-10 z-[10000] relative": true,
          "flex items-center justify-start gap-x-3": true,
          "filter-search-bar:justify-start": true,
          "filter-search-bar:ml-14": true,
          "mobile:-translate-x-5": true,
        })}
      >
        <Search />
        <Filter />
        {isFormOpem && <AddFormPopup />}
        {isContentOpem && <ContentPopup />}
      </div>
      {children}
    </div>
  );
};

export default DashboardPage;
