import React from "react";

export const Input = ({
  title,
  placeholder,
  type,
  id,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <div>
      <p className="text-base font-base text-agility-gray-color-100">{title}</p>
      <input
        id={id}
        className="h-14 border border-agility-gray-color-60 rounded-md w-full p-4"
        placeholder={placeholder}
        type={type}
        name=""
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};
