import React from "react";
import { BannerSlide, HomeTitle, CourseList, PostList } from "../components";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    const coursesFree = t("courses").filter((c) => !c.isPro);
    const coursesPro = t("courses").filter((c) => c.isPro);
    return (
        <div className="max-laptop:w-full">
            <BannerSlide />
            <div className="mt-[70px] max-mobile:mt-[40px] pl-[36px] pr-[50px] max-laptop:pr-[0px] max-mobile:pl-[0px] max-laptop-sm:pr-[0px]">
                <div className="">
                    <HomeTitle
                        content="Khóa học Pro"
                        contentEn="Pro Course"
                        contentJp="プロコース"
                        label="Mới"
                        labelEn="New"
                        labelJp="新しい"
                    />
                    <CourseList courses={coursesPro} />
                </div>
                <HomeTitle
                    content="Khóa học miễn phí"
                    contentEn="Free Course"
                    contentJp="無料コース"
                />
                <CourseList courses={coursesFree} />
                <HomeTitle
                    content="Bài viết nổi bật"
                    contentEn="Featured article"
                    contentJp="おすすめの記事"
                />
                <PostList posts={t("posts")} />
            </div>
        </div>
    );
};

export default Home;
