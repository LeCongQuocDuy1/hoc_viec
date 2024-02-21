import React from "react";
import { BannerSlide, HomeTitle, CourseList, PostList } from "../components";
import { courses } from "../ultils/courses";
import { posts } from "../ultils/posts";

const Home = () => {
    const coursesFree = courses.filter((c) => !c.isPro);
    const coursesPro = courses.filter((c) => c.isPro);

    return (
        <div className="">
            <BannerSlide />
            <div className="mt-[70px] pl-[36px] pr-[50px]">
                <div className="">
                    <HomeTitle content="Khóa học Pro" label="Mới" />
                    <CourseList courses={coursesPro} />
                </div>
                <HomeTitle content="Khóa học miễn phí" />
                <CourseList courses={coursesFree} />
                <HomeTitle content="Bài viết nổi bật" />
                <PostList posts={posts} />
            </div>
        </div>
    );
};

export default Home;
