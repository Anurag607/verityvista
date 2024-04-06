import React, { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closePostForm } from "@/redux/reducers/formSlice";
import classNames from "classnames";
import { useRouter } from "next-nprogress-bar";
import axios from 'axios';
import { CloudImage } from "@/cloudinary/CloudImage";

const AddPostPopup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState<any>({
    category: "",
    heading: "",
    content: "",
    imageLink: "",
    refLink: "",
  });

  const submitForm = async () => {
    try {

      setFormData({...formData,imageLink:'https://res.cloudinary.com/dotwawzhk/image/upload/v1712395190/qd0cy91t0894l1dv6etd.png'})  
      const response = await axios.post("http://127.0.0.1:8000/fact/factmodels/", formData);
      const { data } = response;
      console.log(data);
      setFormData({...formData,category: "",
      heading: "",
      content: "",
      imageLink: "",
      refLink: ""})

      dispatch(closePostForm());
    } catch {
      console.log("some error occured in submit part");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files && e.target.files[0];
    if (file) setImage(file);
  };

  const handleCloseForm = () => {
    dispatch(closePostForm());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    if (!image) return;

    const imageformData = new FormData();
    imageformData.append("upload_preset", "nextBit");

    imageformData.append(
        "cloud_name",
        `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}`
      );
      imageformData.append("api_key", `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`);
      imageformData.append(
        "api_secret",
        `${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`
      );
      imageformData.append("file", image);
      
    //   const cloudinary_url = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
        
    //   const config = {
    //       onUploadProgress: function (progressEvent: any) {
    //         let percentCompleted = Math.round(
    //           (progressEvent.loaded * 100) / progressEvent.total
    //         );
    //         console.log(percentCompleted);
    //       },
    //     };

    // try {
    //   const { data } = await axios.post(`${cloudinary_url}`, imageformData, config);
    //   console.log(data)

    //   const { public_url, secure_url } = data;
    //   console.log(public_url, secure_url)
    //   setFormData({ ...formData, imageLink: secure_url })
    //   return secure_url;
    // } catch (err) {
    //   console.log(err);
    // }
    let imageURL = await CloudImage(imageformData);
    setFormData({ ...formData, imageLink:'https://res.cloudinary.com/dotwawzhk/image/upload/v1712395190/qd0cy91t0894l1dv6etd.png' })


    await submitForm();
    dispatch(closePostForm());
  };

  const inputFields = [
    {
      name: "category",
      function: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, category: e.target.value }),
    },
    {
      name: "heading",
      function: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, heading: e.target.value }),
    },
    {
      name: "refLink",
      function: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, refLink: e.target.value }),
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
        {/* Popup Header - Label, color, pin */}
        {/* <div className="border-b rounded-t py-3 dark:border-gray-600 flex justify-between items-center">
          <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
            {directive[currentForm]}
          </h3>
        </div> */}
        {/* Form... */}
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col items-center justify-center w-full"
        >
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
                      "duration-300 transform -translate-y-4 scale-75": true,
                    })}
                  >
                    {el.name}
                  </label>
                </div>
              );
            })}

            <textarea
              rows={5}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              placeholder={"enter the content here"}
              className={classNames({
                "h-full w-full px-4 py-2 bg-gray-200 mt-3": true,
                "kanit z-10 text-gray-500 rounded-b-md resize-none": true,
                "outline-none border-none cursor-text": true,
                rounded: "md",
              })}
            />
            <input
              className="mt-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              onChange={handleFileChange}
            />
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
              {!isLoading ? "submit" : <></>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostPopup;
