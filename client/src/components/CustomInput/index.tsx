import React from "react";
import classNames from "classnames";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      <textarea
        rows={5}
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input ...`}
        className={classNames({
          "h-full w-full px-4 py-2 bg-neutral-600 mt-0": true,
          "kanit z-10 text-[#ffffff] rounded-b-md resize-none": true,
          "outline-none border-none cursor-text": true,
        })}
      />
    </>
  );
};

export default CustomInput;
