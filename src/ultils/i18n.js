import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
    footerProductEN,
    footerProductVN,
    footerAboutEN,
    footerAboutVN,
    footerToolEN,
    footerToolVN,
    footerProductJP,
    footerAboutJP,
    footerToolJP,
} from "../ultils/footers";
import { menusEN, menusVN, menusJP } from "../ultils/menus";
import { banners, bannersEN, bannersJP } from "../ultils/banners";
import { posts, postsEN } from "../ultils/posts";
import { courses, coursesEN, coursesJP } from "../ultils/courses";

/**
 * The use function is used for configuration and use middleware initReactI18next
 * initReactI18next is used to integrate i18next into React
 * The init function is used to initialize and configure i18next
 */
i18n.use(initReactI18next).init({
    // This is the attribute to determine the default language
    lng: "vn",

    // This is an attribute to specify a fallback language in case the requested language does not exist.
    fallbackLng: "vn",

    // This is a property that determines whether i18next returns a language translation object
    returnObjects: true,

    // This is a property to configure how i18next handles inserting values ​​into language translation strings.
    interpolation: {
        escapeValue: false,
    },

    // provides language translation resources for i18next.
    resources: {
        vn: {
            translation: {
                titleLogo: "Học Lập Trình Để Đi Làm",
                placeholderSearch: "Tìm kiếm khóa học, bài viết, video, ...",
                myCourse: "Khóa học của tôi",
                homeTitle: "{{content}}",
                homeLabel: "{{label}}",
                footerC:
                    "© 2018 - 2024 F8. Nền tảng học lập trình hàng đầu Việt Nam",
                footerPhone: "Điện thoại: 0246.329.1102",
                footerEmail: "Email: contact@fullstack.edu.vn",
                footerAddress: `Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên
                    Hòa, Quận Cầu Giấy, TP. Hà Nội`,
                footerCompanyName: "CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8",
                footerTaxCode: "Mã số thuế: 0109922901",
                footerEstablishment: "Ngày thành lập: 04/03/2022",
                footerField:
                    "Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mang lại giá trị cho cộng đồng.",
                footerProductTitle: footerProductVN.title,
                footerAboutTitle: footerAboutVN.title,
                footerTooltitle: footerToolVN.title,
                footerAboutMenus: footerAboutVN.menus,
                footerToolMenus: footerToolVN.menus,
                sideBarMenus: menusVN,
                bannerSlide: banners,
                posts: posts,
                courses: courses,
            },
        },
        en: {
            translation: {
                titleLogo: "Learn Programming to Get a Job",
                placeholderSearch: "Search for courses, articles, videos, ...",
                myCourse: "My course",
                homeTitle: "{{contentEn}}",
                homeLabel: "{{labelEn}}",
                footerC:
                    "© 2018 - 2024 F8. Vietnam's leading programming learning platform",
                footerPhone: "Phone: 0246.329.1102",
                footerEmail: "Email: contact@fullstack.edu.vn",
                footerAddress: `No. 11D, Lot A10, Nam Trung Yen urban area, Yen Ward
                    Hoa, Cau Giay District, City. Hanoi`,
                footerCompanyName:
                    "F8 EDUCATION TECHNOLOGY JOINT STOCK COMPANY",
                footerTaxCode: "Tax code: 0109922901",
                footerEstablishment: "Foundation date: March 4, 2022",
                footerField:
                    "Field: Technology, education, programming. F8 builds and develops products that bring value to the community.",
                footerProductTitle: footerProductEN.title,
                footerAboutTitle: footerAboutEN.title,
                footerTooltitle: footerToolEN.title,
                footerAboutMenus: footerAboutEN.menus,
                footerToolMenus: footerToolEN.menus,
                sideBarMenus: menusEN,
                bannerSlide: bannersEN,
                posts: postsEN,
                courses: coursesEN,
            },
        },
        jp: {
            translation: {
                titleLogo: "就職するためにプログラミングを学ぶ",
                placeholderSearch: "コース、記事、ビデオなどを検索します...",
                myCourse: "私のコース",
                homeTitle: "{{contentJp}}",
                homeLabel: "{{labelJp}}",
                footerC:
                    "© 2018 - 2024 F8.ベトナムを代表するプログラミング学習プラットフォーム",
                footerPhone: "電話: 0246.329.1102",
                footerEmail: "Email: contact@fullstack.edu.vn",
                footerAddress: `11-14, Nishi Azabu 4-chome, Minato-ku, Tokyo`,
                footerCompanyName: "F8 エデュケーションテクノロジー株式会社",
                footerTaxCode: "税番号: 0109922901",
                footerEstablishment: "設立日: 2022年3月4日",
                footerField:
                    "分野: テクノロジー、教育、プログラミング。 F8 は、コミュニティに価値をもたらす製品を構築および開発します。",
                footerProductTitle: footerProductJP.title,
                footerAboutTitle: footerAboutJP.title,
                footerTooltitle: footerToolJP.title,
                footerAboutMenus: footerAboutJP.menus,
                footerToolMenus: footerToolJP.menus,
                sideBarMenus: menusJP,
                bannerSlide: bannersJP,
                courses: coursesJP,
            },
        },
    },
});

export default i18n;
