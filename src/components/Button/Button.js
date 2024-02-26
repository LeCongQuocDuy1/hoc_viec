import React from "react";

const Button = ({ text = "", outline, full, primary, customPrimary = "" }) => {
    const className = `${
        full ? "text-[#000] bg-[#fff] text-[14px] normal-case" : ""
    } ${
        outline
            ? "hover:text-[#000] hover:bg-[#fff] text-[16px] max-laptop:text-[14px] max-tablet:text-[12px] max-mobile-sm:text-[9px]"
            : ""
    } ${
        primary
            ? `${customPrimary} py-[6px] px-[20px] rounded-[24px] text-[#fff] bg-primary hover:opacity-90 text-[14px] normal-case`
            : ""
    } py-[4px] px-[10px] border-[2px] border-[#fff] font-semibold uppercase rounded-[16px] cursor-pointer`;
    return <button className={className}>{text}</button>;
};

export default Button;
