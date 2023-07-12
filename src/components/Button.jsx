import React from "react";

export const Button = ({ title, type, disabled }) => {
  return (
    <button
      type={type}
      className="inline-block w-full mt-3 py-4 px-8 leading-none text-white bg-[#2382A0] hover:bg-[#146077] font-semibold rounded shadow"
      disabled={disabled}
    >
      <p className="text-white text-base font-medium">{title}</p>
    </button>
  );
};
