import React from "react";
import icons from "../ultils/icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
    const { t } = useTranslation();

    // console.log(t("sideBarMenus")[0].icon);

    return (
        <div className="sticky top-[80px] left-0 w-[110px] bg-[#fff] h-screen max-laptop:hidden">
            <div className="z-10 flex flex-col items-center justify-center w-full">
                {/* Button */}
                <div className="h-[44px] w-[44px] rounded-full bg-blue-600 flex items-center justify-center group cursor-pointer">
                    <icons.FiPlus className="text-[22px] text-[#fff] group-hover:text-[28px] transition-all duration-300" />
                </div>
                {/* Menus */}
                <ul className="flex items-center flex-col gap-[5px] mt-[20px] w-[75px]">
                    {t("sideBarMenus").map((menu) => (
                        <li className="w-full text-center" key={menu.id}>
                            <NavLink
                                to={menu.path}
                                end={menu.end}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-[#e8ebed] rounded-[16px] py-[14px] w-full block"
                                        : "hover:bg-[#f5f5f5] rounded-[16px] py-[14px] w-full block"
                                }
                            >
                                {/* {menu.icon} */}
                                <span className="text-[13px]">{menu.text}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
