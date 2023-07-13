import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../images/svg/logo.svg";
import Home from "../../images/svg/home.svg";
import Map from "../../images/svg/map.svg";
import MenuLeft from "../../images/svg/menu-left.svg";
import notification from "../../images/svg/notification.svg";
import arrow from "../../images/svg/arrow-down.svg";
import { ButtonMenu } from "../ButtonMenu";
import { useAuth } from "../../context/authContext";

export const Dash = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const showProfile = () => {
    setOpen(!open);
  };
  const { logout } = useAuth();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 999px)');

    const handleResize = (event) => {
      if (event.matches) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };

    handleResize(mediaQuery);

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white py-4 w-full px-6 flex">
        <div className="flex ">
          <img src={Logo} alt="" />
        </div>
        <div className="w-[85%] ml-14 flex items-center justify-between">
          <img src={MenuLeft} alt="" onClick={toggleSidebar} />
          <div className="flex items-center gap-[20px]">
            <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]"></div>
            <img src={notification} alt="notification" />
            <div
              className="flex items-center gap-[15px] relative"
              onClick={showProfile}
            >
              <div class="w-px h-7 bg-gray-400"></div>
              <div className="h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40"></div>
              <p>Felipe Gabriel</p>
              <img src={arrow} alt="arrow" />
              {open && (
                <div className="bg-white border h-[50px] w-[140px] absolute bottom-[-65px] z-20 right-0 pt-[10px] pl-[15px] space-y-[10px]">
                  <p
                    onClick={handleLogout}
                    className="cursor-pointer hover:text-[blue] font-semibold"
                  >
                    Log out
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div
          className={` ${sidebarVisible
            ? "bg-white px-6 w-full flex flex-col justify-between md:relative md:w-[15%] md:flex md:flex-col md:justify-between z-50"
            : "hidden"
            }`}
        >
          <div>
            <div className="py-10 w-full flex items-center justify-between">
              <p className="font-semibold font-inter text-xs text-agility-gray-color-80">
                PRINCIPAL
              </p>
            </div>
            <div>
              <div>
                <ButtonMenu
                  title="Pagina inicial"
                  icon={Home}
                  onClick={() => navigate("/")}
                />
              </div>
              <div className="py-9">
                <ButtonMenu
                  title="Lojas Parceiras"
                  icon={Map}
                  onClick={() => navigate("/map")}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${sidebarVisible ? "w-[85%] " : "w-full"
            } bg-agility-background overflow-auto`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};