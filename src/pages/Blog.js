import React from "react";
import { BlogItem } from "../components";

const Blog = () => {
    return (
        <div className="px-[50px] bg-[#fff]">
            <h1 className="text-[30px] font-[900] text-[#000] mb-[10px]">
                Bài viết nổi bật
            </h1>
            <p className="text-[14px] text-[#444] w-[50%]">
                Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình
                online và các kỹ thuật lập trình web.
            </p>
            <div className="flex items-start justify-between gap-[50px] mt-[50px]">
                <div className="w-[65%]">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
                <div className="w-[35%]">
                    <h3 className="text-[16px] font-semibold text-[#444] mb-[10px]">
                        CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
                    </h3>
                    <div className="flex flex-wrap items-center gap-[10px] mb-[60px]">
                        <span className="py-[4px] px-[12px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px]">
                            Front-end / Mobile apps
                        </span>
                        <span className="py-[4px] px-[12px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px]">
                            Back-end / Devops
                        </span>
                        <span className="py-[4px] px-[12px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px]">
                            UI / UX / Design
                        </span>
                        <span className="py-[4px] px-[12px] bg-[#e7e7e7] text-[#000] font-semibold text-[14px] rounded-[20px]">
                            Others
                        </span>
                    </div>
                    <img
                        src="https://files.fullstack.edu.vn/f8-prod/banners/32/6421144f7b504.png"
                        alt=""
                        className="w-full h-full object-cover rounded-[8px] mb-[40px]"
                    />
                    <img
                        src="https://files.fullstack.edu.vn/f8-prod/banners/26/63dc61f2a061e.png"
                        alt=""
                        className="w-full h-full object-cover rounded-[8px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
