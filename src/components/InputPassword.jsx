import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const InputPassword = ({
  title,
  placeholder,
  id,
  onChange,
  onBlur,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <p className="text-base font-base text-agility-gray-color-100">{title}</p>
      <div className="relative">
        <input
          className="h-14 border border-agility-gray-color-60 rounded-md w-full p-4"
          placeholder={placeholder}
          id={id}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <div
          className="absolute top-1/3 right-4 transform cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <HiEyeOff className="text-agility-gray-color-60" size={20} />
          ) : (
            <HiEye className="text-agility-gray-color-60" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};
