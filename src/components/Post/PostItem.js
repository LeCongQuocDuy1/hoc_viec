import React, { useState } from "react";
import Button from "../Button/Button";
import icons from "../../ultils/icons";

const PostItem = (post) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className="w-full">
            <a
                href="/"
                className="max-tablet-sm:h-[200px] max-tablet:h-[180px] max-mobile-sm:h-[230px] h-[150px] w-full rounded-[16px] overflow-hidden block relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[rgba(0,0,0,.5)] before:transition-all before:duration-300"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <img
                    src={post?.post?.thumbnail}
                    alt={post?.post?.title}
                    className="h-full w-full object-cover overflow-hidden"
                />
                {isHovered && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Button text={"Xem bài viết"} full={true} />
                    </div>
                )}
            </a>
            <a
                href="/"
                className="text-[#000] text-[17px] font-semibold mt-[15px] mb-[10px] block w-[95%] truncate"
            >
                {post?.post?.title}
            </a>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <img
                        src={post?.post?.author?.avatar}
                        alt={post?.post?.author?.name}
                        className="h-[24px] w-[24px] rounded-full"
                    />
                    <h3 className="text-[14px] font-semibold text-[#000] flex items-center gap-[5px]">
                        {post?.post?.author?.name}
                        {post?.post?.author?.isAdmin && (
                            <icons.FaCircleCheck className="text-[12px] text-blue-600 mb-[1px]" />
                        )}
                    </h3>
                </div>
                <p className="text-[14px] text-[#444]">
                    {post?.post?.readTime} phút đọc
                </p>
            </div>
        </div>
    );
};

export default PostItem;
