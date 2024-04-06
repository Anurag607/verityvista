import React from "react";
import classNames from "classnames";
import { Search, ContentPopup } from "@/components";
import AddFormPopup from "@/components/Forms/add_form";
import { useAppSelector } from "@/redux/hooks";

const DashboardPage = ({ children }: { children: React.ReactNode }) => {
  const isFormOpem = useAppSelector((state: any) => state.form.isFormOpen);
  const isContentOpem = useAppSelector(
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
        {isFormOpem && <AddFormPopup />}
        {isContentOpem && <ContentPopup />}
      </div>
      {children}
    </div>
  );
};

export default DashboardPage;
