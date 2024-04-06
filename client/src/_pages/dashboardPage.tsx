import React from "react";
import classNames from "classnames";
import { Search } from "@/components";
import { useSelector } from "react-redux";
import AddFormPopup from "@/components/Forms/add_form";
import AddPostPopup from "@/components/Forms/create_post_form";
import { useUser } from '@auth0/nextjs-auth0/client';
import FAB from "@/components/FabIcon";

const DashboardPage = ({ children }: { children: React.ReactNode }) => {
  const { user} = useUser();
  const isFormOpem = useSelector((state: any) => state.form.isFormOpen);
  const isPostFormOpem = useSelector(
    (state: any) => state.form.isPostFormOpen
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
        {isPostFormOpem && <AddPostPopup />}

        {user?(
          <FAB></FAB>
        ):(<></>)}
      </div>
      {children}
    </div>
  );
};

export default DashboardPage;
