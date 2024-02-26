import React from "react";
import Button from "../Button/Button";

const BannerItem = (banner) => {
    const { title, desc, image, textBtn, theme = "" } = banner.banner;
    // flex items-center justify-between
    const className = `${theme} h-[272px] max-tablet:h-[240px] max-mobile:h-[200px] max-mobile-sm:h-[200px] rounded-[16px] relative`;
    return (
        <div className={className}>
            <div className="text-[#fff] pl-[40px] max-mobile:pl-[10px] max-mobile-sm:pl-[30px] mb-[30px] absolute top-[20px] max-laptop:top-[17%] max-mobile:top-[20px] max-mobile-sm:top-[30%] w-[40%] max-laptop:w-[40%] max-mobile-sm:w-[50%]">
                <h1 className="text-[32px] max-laptop:text-[28px] max-tablet-sm:text-[22px] max-tablet:text-[20px] max-mobile:text-[18px] max-mobile-sm:text-[15px] font-bold mb-[5px] max-mobile-sm:mb-[15px]">
                    {title}
                </h1>
                <p className="mb-[20px] max-mobile-sm:hidden">{desc}</p>
                <Button text={textBtn} outline={true} />
            </div>
            <img
                src={image}
                alt={title}
                className="object-cover w-[50%] max-laptop:w-[60%] max-mobile-sm:w-[50%] max-tablet-sm:object-contain max-tablet:w-[55%] max-mobile:w-[60%] float-right h-full"
            />
        </div>
    );
};

export default BannerItem;
