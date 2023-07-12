import React from "react";

export const ButtonMenu = ({ title, onClick, icon }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div onClick={handleClick} className="flex px-2 cursor-pointer">
      <img src={icon} alt="Button Icon" />
      <div className="ml-3">
        <p className="font-normal font-inter text-agility-gray-color-80">
          {title}
        </p>
      </div>
    </div>
  );
};
