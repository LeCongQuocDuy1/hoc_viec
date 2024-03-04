import React from "react";
import logo from "../assets/logo.png";
import icons from "../ultils/icons";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-footerColor py-[70px] px-[130px] max-laptop:py-[40px] max-laptop:px-[36px]">
            <div className="flex max-mobile:flex-col items-start justify-between gap-[50px] mb-[40px]">
                <div className="w-[260px] max-mobile:w-full">
                    <div className="flex items-center gap-[15px] mb-[20px]">
                        <a href="/">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-[38px] w-[38px] max-w-[60px] rounded-[8px]"
                            />
                        </a>
                        <h4 className="text-[16px] font-bold text-[#fff]">
                            {t("titleLogo")}
                        </h4>
                    </div>
                    <a
                        href="/"
                        className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                    >
                        {t("footerPhone")}
                    </a>
                    <a
                        href="/"
                        className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                    >
                        {t("footerEmail")}
                    </a>
                    <a
                        href="/"
                        className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                    >
                        {t("footerAddress")}
                    </a>
                    <div className="w-[260px] mt-[20px] hidden max-laptop:block max-mobile:hidden">
                        <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                            {t("footerCompanyName")}
                        </h3>
                        <ul>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    {t("footerTaxCode")}
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    {t("footerEstablishment")}
                                </a>
                            </li>
                            <li className="mb-[12px]">
                                <a
                                    href="/"
                                    className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                >
                                    {t("footerField")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-3 items-start gap-[20px]">
                    <div className="w-full">
                        <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                            {t("footerAboutTitle")}
                        </h3>
                        <ul>
                            {t("footerAboutMenus").map((item) => (
                                <li className="mb-[12px]" key={item.id}>
                                    <a
                                        href="/"
                                        className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                            {t("footerProductTitle")}
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
                            {t("footerTooltitle")}
                        </h3>
                        <ul>
                            {t("footerToolMenus").map((item) => (
                                <li className="mb-[12px]" key={item.id}>
                                    <a
                                        href="/"
                                        className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-[260px] max-laptop:hidden max-mobile:block max-mobile:w-full">
                    <h3 className="text-[18px] text-[#fff] font-semibold mb-[20px] uppercase">
                        {t("footerCompanyName")}
                    </h3>
                    <ul>
                        <li className="mb-[12px]">
                            <a
                                href="/"
                                className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                            >
                                {t("footerTaxCode")}
                            </a>
                        </li>
                        <li className="mb-[12px]">
                            <a
                                href="/"
                                className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                            >
                                {t("footerEstablishment")}
                            </a>
                        </li>
                        <li className="mb-[12px]">
                            <a
                                href="/"
                                className="block text-[#a9b3bb] text-[14px] text-left cursor-pointer hover:opacity-80"
                            >
                                {t("footerField")}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex max-mobile:flex-col-reverse max-mobile:gap-[15px] items-center justify-between">
                <p className="text-[#a9b3bb] text-[14px]">{t("footerC")}</p>
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
