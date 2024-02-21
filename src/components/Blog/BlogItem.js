import React from "react";
import icons from "../../ultils/icons";
import avatar from "../../assets/avatar.jpg";
import blog1 from "../../assets/blogs/blog1.png";

const BlogItem = () => {
    return (
        <div className="border-[2px] border-[#ccc] rounded-[16px] py-[15px] px-[30px] mb-[16px]">
            <div className="flex items-center justify-between w-full mb-[20px]">
                <div className="flex items-center gap-[8px]">
                    <img
                        src={avatar}
                        alt=""
                        className="h-[30px] w-[30px] rounded-full"
                    />
                    <h3 className="text-[14px] font-semibold text-[#000] flex items-center gap-[5px]">
                        Duy Lê
                        <icons.FaCircleCheck className="text-[11px] text-blue-600 mb-[1px]" />
                    </h3>
                </div>
                <div className="flex items-center gap-[10px]">
                    <icons.IoBookmarkOutline className="text-[20px] text-[#444] cursor-pointer hover:opacity-80" />
                    <icons.HiOutlineDotsVertical className="text-[20px] text-[#444] cursor-pointer hover:opacity-80" />
                </div>
            </div>
            <div className="flex items-start gap-[20px] mb-[20px]">
                <div className="w-[70%]">
                    <h1 className="text-[22px] font-semibold text-[#000] mb-[10px]">
                        Authentication & Authorization trong ReactJS
                    </h1>
                    <p className="text-[15px] text-[#444]">
                        Authentication và Authorization là một phần quan trọng
                        trong việc phát triển phần mềm, giúp chúng ta xác thực
                        và phân quyền...
                    </p>
                </div>
                <img
                    src={blog1}
                    alt=""
                    className="w-[30%] h-[130px] rounded-[10px] object-cover bg-[#ccc]"
                />
            </div>
            <div className="flex items-center gap-[10px]">
                <span className="py-[4px] px-[10px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px]">
                    ReactJS
                </span>
                <span className="text-[14px] text-[#000]">
                    4 tháng trước <span className="mx-[5px]">·</span>9 phút đọc
                </span>
            </div>
        </div>
    );
};

export default BlogItem;
