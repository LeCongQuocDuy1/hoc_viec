import React from "react";

const HomeTitle = ({ content = "", label = "" }) => {
    return (
        <div className="my-[30px] inline-block relative">
            <h1 className="text-[25px] max-tablet-sm:text-[22px] max-tablet:text-[20px] font-[900] text-[#000]">
                {content}
            </h1>
            {label && (
                <span className="px-[6px] py-[2px] bg-[#1473e6] text-[#fff] text-[12px] font-semibold rounded-[4px] uppercase absolute right-[-44px] top-[5px]">
                    {label}
                </span>
            )}
        </div>
    );
};

export default HomeTitle;
