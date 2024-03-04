import React, { useState } from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import icons from "../ultils/icons";
import { NavLink } from "react-router-dom";
import { menu2s } from "../ultils/menus";
import { LANGUAGES } from "../ultils/constants";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { i18n, t } = useTranslation();
    const [activeCourse, setActiveCourse] = useState(false);
    const [activeNotifi, setActiveNotifi] = useState(false);
    const [activeMenus, setActiveMenus] = useState(false);
    const [activeLang, setActiveLang] = useState(false);

    const handleMenus = (e) => {
        e.stopPropagation();
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
        setActiveMenus(!activeMenus);
    };

    /**
     * Change multi languages
     * @param {Number} index
     * @param {String} code
     * No return value
     */

    const changeLang = (index, code) => {
        // Use the built-in changeLanguage function of the i18next library to change languages
        i18n.changeLanguage(code, (err) => {
            if (err) {
                // Handle errors
                return console.log("Lỗi khi thay đổi ngôn ngữ:", err);
            }
        });

        // LANGUAGES is a self-generated array, which contains different language elements
        // Gets an element different from the newly selected element
        const remainLangs = LANGUAGES.filter(
            (item) => item !== LANGUAGES[index]
        );

        // Check to see which element has a code equal to the code you just selected, then change the isActive value
        // The isActive value determines which elements will be shown or hidden on the interface
        if (LANGUAGES[index].code === code) {
            LANGUAGES[index].isActive = true;
            remainLangs.map((item) => (item.isActive = false));
        }
    };

    return (
        <div className="fixed z-10 bg-[#fff] flex items-center justify-between h-[65px] px-[28px] inset-0 border-b-[1px] border-[#ececec] leading-[65px] w-full">
            {/* Header Menus Responsive */}
            <div className="hidden max-laptop:flex items-center gap-[10px]">
                <icons.IoMenu
                    className="text-[30px] text-[#7c7c7c] cursor-pointer"
                    onClick={() => setActiveMenus(!activeMenus)}
                />
                {activeMenus && (
                    <div className="">
                        <div className="fixed top-0 left-0 bottom-0 w-[60%] max-mobile:w-full h-screen bg-[#fff] z-20 pt-[50px] pl-[50px] pb-[50px] max-h-screen overflow-y-scroll">
                            <div className="mb-[40px]">
                                <img
                                    src={avatar}
                                    alt=""
                                    className="w-[80px] h-[80px] rounded-full mb-[20px]"
                                />
                                <h3 className="text-[18px] font-semibold text-[#000] leading-[10px]">
                                    Thích đi du lịch Nhật Bản
                                </h3>
                            </div>
                            <ul>
                                <li className="ml-[-20px]">
                                    <NavLink
                                        to="/"
                                        className="bg-[#fff] hover:bg-[#e8ebed] rounded-[6px] w-full pl-[20px] flex items-center gap-[15px]"
                                    >
                                        <icons.FaUser className="text-[16px] text-[#757575]" />
                                        <span className="text-[16px] font-semibold text-[#333]">
                                            Trang cá nhân
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="ml-[-20px]">
                                    <NavLink
                                        to="/"
                                        className="bg-[#fff] hover:bg-[#e8ebed] rounded-[6px] w-full pl-[20px] flex items-center gap-[20px]"
                                    >
                                        <icons.FaBookOpen className="text-[16px] text-[#757575]" />
                                        <span className="text-[16px] font-semibold text-[#333]">
                                            Khóa học của tôi
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="w-full my-[20px] border-[1px] border-[#e7e7e7]"></div>
                            <ul>
                                {menu2s.map((menu) => (
                                    <li className="ml-[-20px]" key={menu.id}>
                                        <NavLink
                                            to={menu.path}
                                            end={menu.end}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "bg-[#e8ebed] rounded-[6px] w-full pl-[20px] flex items-center gap-[20px]"
                                                    : "bg-[#fff] hover:bg-[#e8ebed] rounded-[6px] w-full pl-[20px] flex items-center gap-[20px]"
                                            }
                                            onClick={() =>
                                                setActiveMenus(!activeMenus)
                                            }
                                        >
                                            {menu.icon}
                                            <span className="text-[16px] font-semibold text-[#333]">
                                                {menu.text}
                                            </span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full my-[20px] border-[1px] border-[#e7e7e7]"></div>
                            <ul>
                                <li className="ml-[-20px]">
                                    <NavLink
                                        to="/"
                                        className="bg-[#fff] hover:bg-[#e8ebed] rounded-[6px] w-full pl-[20px] flex items-center gap-[15px]"
                                    >
                                        <icons.MdInfo className="text-[16px] text-[#757575]" />
                                        <span className="text-[16px] font-semibold text-[#333]">
                                            Giới thiệu
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="ml-[-20px]">
                                    <NavLink
                                        to="/"
                                        className="bg-[#fff] hover:bg-[#e8ebed] rounded-[6px] w-full pl-[20px] flex items-center gap-[20px]"
                                    >
                                        <icons.FaUsers className="text-[16px] text-[#757575]" />
                                        <span className="text-[16px] font-semibold text-[#333]">
                                            Cơ hội việc làm
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="ml-[-20px]">
                                    <NavLink
                                        to="/"
                                        className="bg-[#fff] hover:bg-[#e8ebed] rounded-[6px] w-full pl-[20px] flex items-center gap-[20px]"
                                    >
                                        <icons.IoSettingsSharp className="text-[16px] text-[#757575]" />
                                        <span className="text-[16px] font-semibold text-[#333]">
                                            Cài đặt
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="w-full my-[20px] border-[1px] border-[#e7e7e7]"></div>
                            <ul>
                                <li className="ml-[-20px]">
                                    <NavLink
                                        to="/"
                                        className="bg-[#fff] hover:bg-[#e8ebed] rounded-[6px] w-full pl-[20px] flex items-center gap-[15px]"
                                    >
                                        <icons.MdLogout className="text-[16px] text-[#757575]" />
                                        <span className="text-[16px] font-semibold text-[#333]">
                                            Đăng xuất
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>

                            <icons.FaTimes
                                onClick={() => setActiveMenus(!activeMenus)}
                                className="absolute top-[15px] right-[15px] text-[35px] cursor-pointer hover:opacity-80 text-[#333]"
                            />
                        </div>
                        <div
                            className="fixed inset-0 bg-overlay z-10"
                            onClick={handleMenus}
                        ></div>
                    </div>
                )}
            </div>
            {/* Header Logo */}
            <div className="flex items-center gap-[15px] max-laptop:hidden">
                <a href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-[38px] w-[38px] max-w-[60px] rounded-[8px]"
                    />
                </a>
                <h4 className="text-[14px] font-bold">{t("titleLogo")}</h4>
            </div>
            {/* Header Search */}
            <div className="max-mobile-sm:hidden flex items-center gap-[10px] border-[2px] max-laptop:absolute max-laptop:left-[80px] px-[12px] py-[4px] border-[#e8e8e8] rounded-[20px] focus-within:border-[#444] transition-all duration-300">
                <icons.IoSearch className="text-[23px] text-[#7c7c7c]" />
                <input
                    type="text"
                    className="text-[14px] text-[#444] leading-[2] w-[380px] max-laptop:w-[350px] max-mobile:w-[260px]"
                    placeholder={t("placeholderSearch")}
                />
            </div>
            {/* Header Options */}
            <div className="flex items-center max-mobile:gap-[12px] max-tablet-sm:gap-[5px] gap-[20px] relative">
                <div
                    className="relative hover:bg-[#e7e7e7] cursor-pointer rounded-[20px] py-[6px] px-[10px]"
                    onClick={() => {
                        setActiveLang(!activeLang);
                    }}
                >
                    {LANGUAGES.map(
                        (item) =>
                            item.isActive && (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-[5px] leading-[0px]"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.text}
                                        className="w-[20px] h-[20px] rounded-full"
                                    />
                                    <span className="text-[14px] font-semibold text-[#444] uppercase">
                                        {item.text}
                                    </span>
                                </div>
                            )
                    )}

                    {activeLang && (
                        <div className="absolute top-[36px] right-[5px] bg-[#fff] w-[130px] rounded-[10px] py-[5px] z-20 shadow-main">
                            {LANGUAGES.map((item, index) => (
                                <p
                                    key={index}
                                    onClick={() => changeLang(index, item.code)}
                                    className="text-[14px] font-semibold text-[#444] w-full text-center hover:bg-[#d3d3d3] leading-[30px] py-[5px]"
                                >
                                    {item.label}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="">
                    <h3
                        className="text-[14px] text-[#444] font-semibold cursor-pointer max-laptop:hidden"
                        onClick={() => {
                            setActiveCourse(!activeCourse);
                        }}
                    >
                        {t("myCourse")}
                    </h3>
                    {activeCourse && (
                        <div className="absolute top-[55px] right-[80px] bg-[#fff] w-[380px] max-h-[500px] overflow-hidden rounded-[10px] z-10 shadow-main">
                            <div className="sticky top-0 left-0 right-0 z-20 bg-[#fff] flex items-center justify-between px-5 py-4">
                                <h3 className="text-[18px] font-semibold leading-[10px]">
                                    Khóa học của tôi
                                </h3>
                                <p className="text-[14px] text-primary hover:bg-[#f0f0f0] cursor-pointer p-2 rounded-[6px] leading-[10px]">
                                    Xem tất cả
                                </p>
                            </div>
                            <div className="flex-col p-2 overflow-y-scroll max-h-[500px]">
                                <div className="flex items-center w-full gap-[15px] cursor-pointer hover:bg-[#e6e6e6] px-3 py-2 rounded-[10px]">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                                        alt=""
                                        className="w-[130px] h-[70px] object-cover rounded-[6px] cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[16px] font-semibold mb-[10px] leading-[10px]">
                                            Kiến thức nhập môn IT
                                        </p>
                                        <p className="text-[12px] text-[#333] leading-[10px] mb-[14px]">
                                            Học cách đây 1 tháng trước
                                        </p>
                                        <div className="w-full h-[8px] bg-[#e7e7e7] rounded-[16px] relative before:content-[''] before:absolute before:w-[80%] before:bg-primary before:h-full before:rounded-tl-[16px] before:rounded-bl-[16px]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full gap-[15px] cursor-pointer hover:bg-[#e6e6e6] px-3 py-2 rounded-[10px]">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                                        alt=""
                                        className="w-[130px] h-[70px] object-cover rounded-[6px] cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[16px] font-semibold mb-[10px] leading-[10px]">
                                            Kiến thức nhập môn IT
                                        </p>
                                        <p className="text-[12px] text-[#333] leading-[10px] mb-[14px]">
                                            Học cách đây 1 tháng trước
                                        </p>
                                        <div className="w-full h-[8px] bg-[#e7e7e7] rounded-[16px] relative before:content-[''] before:absolute before:w-[80%] before:bg-primary before:h-full before:rounded-tl-[16px] before:rounded-bl-[16px]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full gap-[15px] cursor-pointer hover:bg-[#e6e6e6] px-3 py-2 rounded-[10px]">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png"
                                        alt=""
                                        className="w-[130px] h-[70px] object-cover rounded-[6px] cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[16px] font-semibold mb-[10px] leading-[10px]">
                                            Kiến thức nhập môn IT
                                        </p>
                                        <p className="text-[12px] text-[#333] leading-[10px] mb-[14px]">
                                            Học cách đây 1 tháng trước
                                        </p>
                                        <div className="w-full h-[8px] bg-[#e7e7e7] rounded-[16px] relative before:content-[''] before:absolute before:w-[80%] before:bg-primary before:h-full before:rounded-tl-[16px] before:rounded-bl-[16px]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full gap-[15px] cursor-pointer hover:bg-[#e6e6e6] px-3 py-2 rounded-[10px]">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/3.png"
                                        alt=""
                                        className="w-[130px] h-[70px] object-cover rounded-[6px] cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[16px] font-semibold mb-[10px] leading-[10px]">
                                            Kiến thức nhập môn IT
                                        </p>
                                        <p className="text-[12px] text-[#333] leading-[10px] mb-[14px]">
                                            Học cách đây 1 tháng trước
                                        </p>
                                        <div className="w-full h-[8px] bg-[#e7e7e7] rounded-[16px] relative before:content-[''] before:absolute before:w-[80%] before:bg-primary before:h-full before:rounded-tl-[16px] before:rounded-bl-[16px]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full gap-[15px] cursor-pointer hover:bg-[#e6e6e6] px-3 py-2 rounded-[10px]">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/12.png"
                                        alt=""
                                        className="w-[130px] h-[70px] object-cover rounded-[6px] cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[16px] font-semibold mb-[10px] leading-[10px]">
                                            Kiến thức nhập môn IT
                                        </p>
                                        <p className="text-[12px] text-[#333] leading-[10px] mb-[14px]">
                                            Học cách đây 1 tháng trước
                                        </p>
                                        <div className="w-full h-[8px] bg-[#e7e7e7] rounded-[16px] relative before:content-[''] before:absolute before:w-[80%] before:bg-primary before:h-full before:rounded-tl-[16px] before:rounded-bl-[16px]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full gap-[15px] cursor-pointer hover:bg-[#e6e6e6] px-3 py-2 rounded-[10px]">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/1.png"
                                        alt=""
                                        className="w-[130px] h-[70px] object-cover rounded-[6px] cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[16px] font-semibold mb-[10px] leading-[10px]">
                                            Kiến thức nhập môn IT
                                        </p>
                                        <p className="text-[12px] text-[#333] leading-[10px] mb-[14px]">
                                            Học cách đây 1 tháng trước
                                        </p>
                                        <div className="w-full h-[8px] bg-[#e7e7e7] rounded-[16px] relative before:content-[''] before:absolute before:w-[80%] before:bg-primary before:h-full before:rounded-tl-[16px] before:rounded-bl-[16px]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full gap-[15px] cursor-pointer hover:bg-[#e6e6e6] px-3 py-2 rounded-[10px]">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                                        alt=""
                                        className="w-[130px] h-[70px] object-cover rounded-[6px] cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[16px] font-semibold mb-[10px] leading-[10px]">
                                            Kiến thức nhập môn IT
                                        </p>
                                        <p className="text-[12px] text-[#333] leading-[10px] mb-[14px]">
                                            Học cách đây 1 tháng trước
                                        </p>
                                        <div className="w-full h-[8px] bg-[#e7e7e7] rounded-[16px] relative before:content-[''] before:absolute before:w-[80%] before:bg-primary before:h-full before:rounded-tl-[16px] before:rounded-bl-[16px]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full gap-[15px] cursor-pointer hover:bg-[#e6e6e6] px-3 py-2 rounded-[10px]">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/6.png"
                                        alt=""
                                        className="w-[130px] h-[70px] object-cover rounded-[6px] cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[16px] font-semibold mb-[10px] leading-[10px]">
                                            Kiến thức nhập môn IT
                                        </p>
                                        <p className="text-[12px] text-[#333] leading-[10px] mb-[14px]">
                                            Học cách đây 1 tháng trước
                                        </p>
                                        <div className="w-full h-[8px] bg-[#e7e7e7] rounded-[16px] relative before:content-[''] before:absolute before:w-[80%] before:bg-primary before:h-full before:rounded-tl-[16px] before:rounded-bl-[16px]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="">
                    <icons.IoSearch className="text-[23px] text-[#7c7c7c] cursor-pointer hidden max-mobile-sm:block" />
                </div>
                <div className="">
                    <icons.FaBell
                        className="text-[20px] text-[#7c7c7c] cursor-pointer hover:text-[#444]"
                        onClick={() => {
                            setActiveNotifi(!activeNotifi);
                        }}
                    />
                    {activeNotifi && (
                        <div className="absolute top-[55px] right-[50px] max-laptop:top-[35px] max-laptop:right-[0] bg-[#fff] w-[380px] max-laptop:w-[500px] max-mobile:w-[400px] max-h-[540px] overflow-hidden rounded-[10px] z-10 shadow-main">
                            <div className="sticky top-0 left-0 right-0 z-20 bg-[#fff] flex items-center justify-between px-5 py-4">
                                <h3 className="text-[18px] font-semibold leading-[10px]">
                                    Thông báo
                                </h3>
                                <p className="text-[14px] text-primary hover:bg-[#f0f0f0] cursor-pointer p-2 rounded-[6px] leading-[10px]">
                                    Đánh dấu đã đọc
                                </p>
                            </div>
                            <div className="flex-col p-2 overflow-y-scroll max-h-[540px]">
                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start w-full gap-[15px] cursor-pointer bg-[rgba(240,81,35,.1)] mb-[10px] p-3 rounded-[10px]">
                                    <img
                                        src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                        alt=""
                                        className="w-[45px] h-[45px] object-cover rounded-full cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <p className="cursor-pointer text-[15px] mb-[10px] leading-[20px]">
                                            <strong>Mister Tino</strong> đã nhắc
                                            tới bạn trong một bình luận.
                                        </p>
                                        <p className="text-[13px] text-primary leading-[10px]">
                                            1 tháng trước
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sticky bottom-0 left-0 right-0 z-20 bg-[#fff] text-center px-5 py-4">
                                <h3 className="cursor-pointer text-[14px] font-semibold leading-[10px] text-primary">
                                    Xem tất cả thông báo
                                </h3>
                            </div>
                        </div>
                    )}
                </div>
                <div className="max-laptop:hidden">
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="h-[30px] w-[30px] rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
