import React from "react";
import { BlogItem } from "../components";
import icons from "../ultils/icons";

const Blog = () => {
    return (
        <div className="px-[50px] bg-[#fff] max-mobile:px-[0px] max-mobile:text-center">
            <h1 className="text-[30px] font-[900] text-[#000] mb-[10px]">
                Bài viết nổi bật
            </h1>
            <p className="text-[14px] text-[#444] w-[50%] max-mobile:w-full">
                Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình
                online và các kỹ thuật lập trình web.
            </p>
            <div className="grid grid-cols-3 max-laptop:grid-cols-1 gap-[50px] max-laptop:gap-[0px] mt-[50px] mb-[200px] max-laptop:mb-[0px]">
                <div className="col-span-2">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <div className="mt-[30px] w-full flex items-center justify-center gap-[10px] max-mobile:my-[20px]">
                        <icons.MdKeyboardDoubleArrowLeft className="text-[37px] py-[4px] px-[10px] text-[#d3d3d3] hover:border-[1px] border-[#d3d3d3] cursor-pointer rounded-[6px]" />
                        <a
                            href="/"
                            className="max-mobile:text-[14px] bg-primary px-4 py-2 text-sm font-semibold text-white rounded-[6px]"
                        >
                            1
                        </a>
                        <a
                            href="/"
                            className="max-mobile:text-[14px] bg-[#fff] px-4 py-2 text-sm font-semibold text-[#000] border-[1px] border-[#d3d3d3] hover:bg-primary hover:text-[#fff] hover:border-primary rounded-[6px]"
                        >
                            2
                        </a>
                        <a
                            href="/"
                            className="max-mobile:text-[14px] bg-[#fff] px-4 py-2 text-sm font-semibold text-[#000] border-[1px] border-[#d3d3d3] hover:bg-primary hover:text-[#fff] hover:border-primary rounded-[6px]"
                        >
                            3
                        </a>
                        <a
                            href="/"
                            className="max-mobile:text-[14px] bg-[#fff] px-4 py-2 text-sm font-semibold text-[#000] border-[1px] border-[#d3d3d3] hover:bg-primary hover:text-[#fff] hover:border-primary rounded-[6px]"
                        >
                            ...
                        </a>
                        <a
                            href="/"
                            className="max-mobile:text-[14px] bg-[#fff] px-4 py-2 text-sm font-semibold text-[#000] border-[1px] border-[#d3d3d3] hover:bg-primary hover:text-[#fff] hover:border-primary rounded-[6px]"
                        >
                            8
                        </a>
                        <a
                            href="/"
                            className="max-mobile:text-[14px] bg-[#fff] px-4 py-2 text-sm font-semibold text-[#000] border-[1px] border-[#d3d3d3] hover:bg-primary hover:text-[#fff] hover:border-primary rounded-[6px]"
                        >
                            9
                        </a>
                        <a
                            href="/"
                            className="max-mobile:text-[14px] bg-[#fff] px-4 py-2 text-sm font-semibold text-[#000] border-[1px] border-[#d3d3d3] hover:bg-primary hover:text-[#fff] hover:border-primary rounded-[6px]"
                        >
                            10
                        </a>
                        <icons.MdKeyboardDoubleArrowRight className="text-[37px] py-[4px] px-[10px] text-[#444] rounded-[6px] hover:border-[1px] border-[#d3d3d3] cursor-pointer" />
                    </div>
                </div>
                <div className="w-full sticky top-[80px] right-0 h-screen max-laptop:block max-mobile:block">
                    <h3 className="text-[16px] font-semibold text-[#444] mb-[10px]">
                        CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
                    </h3>
                    <div className="flex flex-wrap items-center gap-[10px] mb-[60px]">
                        <span className="cursor-pointer hover:bg-[#d3d3d3] py-[4px] px-[12px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px]">
                            Front-end / Mobile apps
                        </span>
                        <span className="cursor-pointer hover:bg-[#d3d3d3] py-[4px] px-[12px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px]">
                            Back-end / Devops
                        </span>
                        <span className="cursor-pointer hover:bg-[#d3d3d3] py-[4px] px-[12px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px]">
                            UI / UX / Design
                        </span>
                        <span className="cursor-pointer hover:bg-[#d3d3d3] py-[4px] px-[12px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px] ">
                            Others
                        </span>
                    </div>
                    <div className="max-laptop:flex max-laptop:items-start max-laptop:justify-between max-laptop:gap-[40px] max-mobile:flex-col max-mobile:gap-[0px]">
                        <img
                            src="https://files.fullstack.edu.vn/f8-prod/banners/32/6421144f7b504.png"
                            alt=""
                            className="w-full h-[300px] object-cover rounded-[8px] mb-[40px]"
                        />
                        <img
                            src="https://files.fullstack.edu.vn/f8-prod/banners/26/63dc61f2a061e.png"
                            alt=""
                            className="w-full h-[300px] object-cover rounded-[8px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
