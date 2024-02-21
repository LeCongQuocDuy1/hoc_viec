import React, { useState } from "react";
import icons from "../../ultils/icons";
import Button from "../Button/Button";

const CourseItem = (course) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className="w-[25%] pr-[12px] pl-[12px] mb-[26px]">
            <a
                href="/"
                className="h-[150px] w-full rounded-[16px] overflow-hidden block relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[rgba(0,0,0,.5)] before:transition-all before:duration-300"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <img
                    src={course?.course?.thumbnail}
                    alt={course?.course?.title}
                    className="h-full"
                />
                {course.course.isPro ? (
                    <div className="absolute top-[10px] left-[14px] px-[6px] py-[5px] bg-[rgba(0,0,0,.4)] rounded-[6px]">
                        <icons.FaCrown className="text-[#fdbe11] text-[16px]" />
                    </div>
                ) : (
                    ""
                )}
                {isHovered && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Button text={"Xem khóa học"} full={true} />
                    </div>
                )}
            </a>
            <a
                href="/"
                className="text-[#000] text-[17px] font-semibold mt-[15px] mb-[5px] block"
            >
                {course?.course?.title}
            </a>
            {course?.course?.isPro ? (
                <div className="flex items-center gap-[10px]">
                    <span className="line-through text-[15px] text-[#000]">
                        2.500.000đ
                    </span>
                    <span className="text-[17px] text-primary font-semibold">
                        1.229.000đ
                    </span>
                </div>
            ) : (
                <div className="flex items-center gap-[10px]">
                    <icons.FaUsers className="text-[20px] text-[#444]" />
                    <p className="text-[15px] text-[#444]">
                        {course?.course?.memberCount
                            .toLocaleString("en")
                            .replace(",", ".")}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CourseItem;
