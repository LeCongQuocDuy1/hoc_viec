import React from "react";
import Button from "../Button/Button";

const BannerItem = (banner) => {
    const { title, desc, image, textBtn, theme = "" } = banner.banner;
    const className = `${theme} h-[272px] rounded-[16px] flex items-center justify-between`;
    return (
        <div className={className}>
            <div className="text-[#fff] pl-[40px] h-[50%] mb-[30px]">
                <h1 className="text-[32px] font-bold mb-[5px]">{title}</h1>
                <p className="mb-[20px]">{desc}</p>
                <Button text={textBtn} outline={true} />
            </div>
            <img src={image} alt={title} className="object-cover" />
        </div>
    );
};

export default BannerItem;
