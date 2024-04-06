import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeForm } from "@/redux/reducers/formSlice";
import classNames from "classnames";
import { useRouter } from "next-nprogress-bar";

const directive = [
  "Define Your Role.",
  "State Your Profession",
  "State Your Location",
];

const Profession = [
  { value: "Health and Medicine", label: "Health and Medicine" },
  { value: "News and Current Affairs", label: "News and Current Affairs" },
  { value: "Science and Technology", label: "Science and Technology" },
  { value: "Entertainment Industry", label: "Entertainment Industry" },
  {
    value: "Politics and Government Policies",
    label: "Politics and Government Policies",
  },
];

const RoleOptions = [
  { value: "Expert", label: "Expert" },
  { value: "User", label: "User" },
];

const options = [RoleOptions, Profession];
const fields = ["role", "profession", "location"];

const AddFormPopup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { authInstance } = useAppSelector((state: any) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [currentForm, setCurrentForm] = useState(0);
  const [formData, setFormData] = useState<any>({
    role: "",
    profession: "",
    country: "",
    district: "",
    state: "",
  });

  const handleCloseForm = () => {
    dispatch(closeForm());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (formData.role === "Expert") setCurrentForm(1);
    if (formData.profession === "News and Current Affairs") setCurrentForm(2);
  };

  const inputFields = [
    {
      name: "Country",
      function: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, country: e.target.value }),
    },
    {
      name: "District",
      function: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, district: e.target.value }),
    },
    {
      name: "State",
      function: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, state: e.target.value }),
    },
  ];

  return (
    <div
      className={classNames({
        "fixed top-0 left-0 w-full h-full z-[100000]": true,
        "flex items-center justify-center": true,
        "bg-gray-800 bg-opacity-50": true,
      })}
    >
      <div className="relative bg-white mobile:w-[95vw] rounded-lg px-4 py-8 shadow-lg w-[19rem] dark:bg-neutral-800">
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
          onClick={handleCloseForm}
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
        <div className="rounded-t py-3 flex justify-between items-center">
          <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
            {directive[currentForm]}
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col items-center justify-center w-full"
        >
          <div className="relative flex sm:flex-row h-fit overflow-scroll sm:overflow-hidden sm:h-fit flex-col items-start justify-start sm:justify-center w-full sm:gap-4">
            <div className={"relative w-full flex items-center justify-center"}>
              {currentForm <= 1 && (
                <div
                  className={
                    "w-full flex items-cneter justify-center bg-neutral-200 rounded-lg"
                  }
                >
                  <select
                    className="bg-neutral-200 rounded-lg py-2 relative w-[95%] focus:!border-none focus:!outline-none"
                    onBlur={(e) => {
                      e.preventDefault();
                      setFormData({
                        ...formData,
                        [fields[currentForm]]: e.target.value,
                      });
                    }}
                  >
                    {options[currentForm].map((pair, index) => {
                      return (
                        <option
                          className="w-full mx-3"
                          key={index}
                          value={pair.value}
                        >
                          {pair.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
              {currentForm === 2 && (
                <div className={"flex flex-col gap-y-0 w-full relative"}>
                  {inputFields.map((el: (typeof inputFields)[0], i: number) => {
                    return (
                      <div className="relative mb-0 mt-2 w-full" key={i}>
                        <input
                          type="text"
                          id={el.name}
                          className={classNames({
                            "block px-2.5 pb-2.5 pt-4 w-full": true,
                            "text-sm text-gray-900 bg-gray-200 dark:bg-neutral-700":
                              true,
                            "rounded-lg border-1 border-gray-900": true,
                            "appearance-none dark:text-white": true,
                            "dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer":
                              true,
                          })}
                          onChange={el.function}
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor={el.name}
                          className={classNames({
                            "absolute top-2 left-1": true,
                            "z-10 origin-[0] px-2": true,
                            "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500":
                              true,
                            "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2":
                              true,
                            "peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4":
                              true,
                            "bg-transparent": true,
                            "text-sm text-gray-500 dark:text-gray-400": true,
                            "duration-300 transform -translate-y-4 scale-75":
                              true,
                          })}
                        >
                          {el.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {/* Submit... */}
          <div className="mt-4 w-full flex items-center justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={classNames({
                "cursor-default pointer-events-none": isLoading,
                "px-4 py-2 rounded-md focus:outline-none border": true,
                "bg-gray-900 text-[#e8e8e8] dark:bg-[#e8e8e8] dark:text-gray-900":
                  true,
                "hover:!bg-transparent hover:text-primary hover:border-primary hover:dark:text-[#e8e8e8]":
                  true,
              })}
            >
              {!isLoading ? "Proceed" : <></>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFormPopup;
