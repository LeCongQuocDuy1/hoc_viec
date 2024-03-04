import vnImg from "../assets/vn.png";
import enImg from "../assets/en.png";
import jpImg from "../assets/jp.png";

export const LANGUAGES = [
    {
        id: 1,
        label: "Tiếng Việt",
        code: "vn",
        image: vnImg,
        text: "vi",
        isActive: true,
    },
    {
        id: 2,
        label: "English",
        code: "en",
        image: enImg,
        text: "en",
        isActive: false,
    },
    {
        id: 3,
        label: "Japanese",
        code: "jp",
        image: jpImg,
        text: "jp",
        isActive: false,
    },
];
