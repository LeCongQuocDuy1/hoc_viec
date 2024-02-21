import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import icons from "../ultils/icons";

const Header = () => {
    return (
        <div className="fixed z-10 bg-[#fff] flex items-center justify-between h-[65px] px-[28px] inset-0 border-b-[1px] border-[#ececec] leading-[65px]">
            {/* Header Logo */}
            <div className="flex items-center gap-[15px]">
                <a href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-[38px] w-[38px] rounded-[8px]"
                    />
                </a>
                <h4 className="text-[14px] font-bold">
                    Học Lập Trình Để Đi Làm
                </h4>
            </div>
            {/* Header Search */}
            <div className="flex items-center gap-[10px] border-[2px] px-[12px] py-[4px] border-[#e8e8e8] rounded-[20px] focus-within:border-[#444] transition-all duration-300">
                <icons.IoSearch className="text-[23px] text-[#7c7c7c]" />
                <input
                    type="text"
                    className="text-[14px] text-[#444] leading-[2] w-[380px]"
                    placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                />
            </div>
            {/* Header Options */}
            <div className="flex items-center gap-[20px]">
                <div className="">
                    <h3 className="text-[14px] text-[#444] font-semibold cursor-pointer">
                        Khóa học của tôi
                    </h3>
                </div>
                <div className="">
                    <icons.FaBell className="text-[20px] text-[#7c7c7c] cursor-pointer hover:text-[#444]" />
                </div>
                <div className="">
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
