import React from "react";
import logo from "../assets/logo.png";
import icons from "../ultils/icons";

const Footer = () => {
    return (
        <div className="w-full bg-footerColor py-[70px] px-[130px] max-laptop:py-[40px] max-laptop:px-[36px]">
            <div className="flex max-mobile:flex-col items-start justify-between gap-[50px] mb-[40px]">
                <div className="w-[260px] max-mobile:w-full">
                    <div className="flex items-center gap-[15px] mb-[20px]">
                        <a href="/">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-[38px] w-[38px] rounded-[8px]"
                            />
                        </a>
                        <h4 className="text-[16px] font-bold text-[#fff]">
                            Học Lập Trình Để Đi Làm
                        </h4>
                    </div>
                    <a
                        href="/"
                        className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                    >
                        Điện thoại: 0246.329.1102
                    </a>
                    <a
                        href="/"
                        className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                    >
                        Email: contact@fullstack.edu.vn
                    </a>
                    <a
                        href="/"
                        className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                    >
                        Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên
                        Hòa, Quận Cầu Giấy, TP. Hà Nội
                    </a>
                    <div className="w-[260px] mt-[20px] hidden max-laptop:block max-mobile:hidden">
                        <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                            CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                        </h3>
                        <ul>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Mã số thuế: 0109922901
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Ngày thành lập: 04/03/2022
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Lĩnh vực: Công nghệ, giáo dục, lập trình. F8
                                    xây dựng và phát triển những sản phẩm mang
                                    lại giá trị cho cộng đồng.
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-3 items-start gap-[20px]">
                    <div className="w-full">
                        <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                            VỀ F8
                        </h3>
                        <ul>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Giới thiệu
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Liên hệ
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Điều khoản
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Bảo mật
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Cơ hội việc làm
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                            SẢN PHẨM
                        </h3>
                        <ul>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Game Nester
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Game CSS Diner
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Game CSS Selectors
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Game Froggy
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Game Froggy Pro
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Game Scoops
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                            CÔNG CỤ
                        </h3>
                        <ul>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Tạo CV xin việc
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Rút gọn liên kết
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Clip-path maker
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Snippet generator
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    CSS Grid generator
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    Cảnh báo sờ tay lên mặt
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[260px] max-laptop:hidden max-mobile:block max-mobile:w-full">
                    <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                        CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                    </h3>
                    <ul>
                        <li className="mb-[12px]">
                            <a
                                href="/"
                                className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                            >
                                Mã số thuế: 0109922901
                            </a>
                        </li>
                        <li className="mb-[12px]">
                            <a
                                href="/"
                                className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                            >
                                Ngày thành lập: 04/03/2022
                            </a>
                        </li>
                        <li className="mb-[12px]">
                            <a
                                href="/"
                                className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                            >
                                Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây
                                dựng và phát triển những sản phẩm mang lại giá
                                trị cho cộng đồng.
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex max-mobile:flex-col-reverse max-mobile:gap-[15px] items-center justify-between">
                <p className="text-[#a9b3bb] text-[14px]">
                    © 2018 - 2024 F8. Nền tảng học lập trình hàng đầu Việt Nam
                </p>
                <div className="flex items-center gap-[15px] max-laptop:mr-[50px] max-mobile:mr-0">
                    <a href="/">
                        <icons.FaFacebook className="text-[35px] text-blue-500" />
                    </a>
                    <a href="/">
                        <icons.FaYoutube className="text-[35px] text-red-500" />
                    </a>
                    <a href="/">
                        <icons.FaTiktok className="text-[35px] text-[#fff]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
