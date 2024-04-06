"use client";

import Loader from "@/components/Loader";
import ModCard from "@/components/ModCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ModeratorPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [modData, setmodData] = useState([]);

  useEffect(() => {
    async function fetchGuidebooks() {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_RENDER_SERVER}/getexreq`
      );
      if (data) {
        console.log(data);
        setmodData(data.payload);
        setIsLoading(false);
        console.log(modData);
      } else {
        console.log("error");
        setIsLoading(false);
      }
    }
    fetchGuidebooks();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-y-2 justify-center lg:justify-start w-full relatives h-[92.5%] pb-2 sm_md:pb-4 px-2 md:px-4 sm:overflow-y-scroll thin-scrollbar">
        {modData.length > 0 &&
          modData.map((guide, index) => {
            return <ModCard key={index} guide={guide} index={index} />;
          })}
        {modData.length === 0 && (
          <p className="text-lg text-neutral-500 max-w-[90%] mx-auto lg:max-w-full text-center lg:text-left">
            {"No Request available"}
          </p>
        )}
      </div>
    </>
  );
};

export default ModeratorPage;
