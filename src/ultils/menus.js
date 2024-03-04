import icons from "../ultils/icons";
import path from "../ultils/path";

export const menus = [
    {
        id: 1,
        path: path.HOME,
        text: "Trang chủ",
        end: true,
        icon: <icons.HiHome className="text-[22px] text-[#1a1a1a] m-auto" />,
    },
    {
        id: 2,
        path: path.LEARNING_PATH,
        text: "Lộ trình",
        icon: <icons.FaRoad className="text-[22px] text-[#1a1a1a] m-auto" />,
    },
    {
        id: 3,
        path: path.BLOG,
        text: "Bài viết",
        icon: (
            <icons.LuNewspaper className="text-[22px] text-[#1a1a1a] m-auto" />
        ),
    },
];

export const menusVN = [
    {
        id: 1,
        path: path.HOME,
        text: "Trang chủ",
        end: true,
        icon: <icons.HiHome className="text-[22px] text-[#1a1a1a] m-auto" />,
    },
    {
        id: 2,
        path: path.LEARNING_PATH,
        text: "Lộ trình",
        // icon: <icons.FaRoad className="text-[22px] text-[#1a1a1a] m-auto" />,
    },
    {
        id: 3,
        path: path.BLOG,
        text: "Bài viết",
        // icon: (
        //     <icons.LuNewspaper className="text-[22px] text-[#1a1a1a] m-auto" />
        // ),
    },
];

export const menusEN = [
    {
        id: 1,
        path: path.HOME,
        text: "Home",
        end: true,
        // icon: <icons.HiHome className="text-[22px] text-[#1a1a1a] m-auto" />,
    },
    {
        id: 2,
        path: path.LEARNING_PATH,
        text: "Learning Path",
        // icon: <icons.FaRoad className="text-[22px] text-[#1a1a1a] m-auto" />,
    },
    {
        id: 3,
        path: path.BLOG,
        text: "Blog",
        // icon: (
        //     <icons.LuNewspaper className="text-[22px] text-[#1a1a1a] m-auto" />
        // ),
    },
];

export const menusJP = [
    {
        id: 1,
        path: path.HOME,
        text: "家",
        end: true,
        // icon: <icons.HiHome className="text-[22px] text-[#1a1a1a] m-auto" />,
    },
    {
        id: 2,
        path: path.LEARNING_PATH,
        text: "学習パス",
        // icon: <icons.FaRoad className="text-[22px] text-[#1a1a1a] m-auto" />,
    },
    {
        id: 3,
        path: path.BLOG,
        text: "ブログ",
        // icon: (
        //     <icons.LuNewspaper className="text-[22px] text-[#1a1a1a] m-auto" />
        // ),
    },
];

export const menu2s = [
    {
        id: 1,
        path: path.HOME,
        text: "Trang chủ",
        end: true,
        icon: <icons.HiHome className="text-[16px] text-[#757575]" />,
    },
    {
        id: 2,
        path: path.LEARNING_PATH,
        text: "Lộ trình",
        icon: <icons.FaRoad className="text-[16px] text-[#757575]" />,
    },
    {
        id: 3,
        path: path.BLOG,
        text: "Bài viết",
        icon: <icons.LuNewspaper className="text-[16px] text-[#757575]" />,
    },
];
