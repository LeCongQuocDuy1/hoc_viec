import React from "react";
import Slider from "react-slick";
import BannerItem from "./BannerItem";
import icons from "../../ultils/icons";
import { banners } from "../../ultils/banners";

const PrevArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
    <icons.IoIosArrowBack {...arrowProps} />
);

const NextArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
    <icons.IoIosArrowForward {...arrowProps} />
);

const BannerSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-[1180px] desktop-lg:w-[1270px] max-desktop:w-[1110px] max-laptop:w-full max-tablet-sm:w-full">
            <Slider {...settings}>
                {banners?.map((item) => (
                    <React.Fragment key={item.id}>
                        <BannerItem banner={item} />
                    </React.Fragment>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlide;
