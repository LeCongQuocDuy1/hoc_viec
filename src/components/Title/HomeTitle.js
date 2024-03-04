import React from "react";
import { useTranslation } from "react-i18next";

const HomeTitle = ({
    content = "",
    label = "",
    contentEn,
    labelEn,
    contentJp,
    labelJp,
}) => {
    const { t } = useTranslation();

    return (
        <div className="my-[30px] inline-block relative">
            <h1 className="text-[25px] max-tablet-sm:text-[22px] max-tablet:text-[20px] font-[900] text-[#000]">
                {t("homeTitle", { content, contentEn, contentJp })}
            </h1>
            {label && (
                <span className="px-[6px] py-[2px] bg-[#1473e6] text-[#fff] text-[12px] font-semibold rounded-[4px] uppercase absolute right-[-50px] top-[5px]">
                    {t("homeLabel", { label, labelEn, labelJp })}
                </span>
            )}
        </div>
    );
};

export default HomeTitle;
