import html from "../assets/courses-logo/html.jpg";
import js from "../assets/courses-logo/js.jpg";
import react from "../assets/courses-logo/react.png";
import nodejs from "../assets/courses-logo/nodejs.png";
import angular from "../assets/courses-logo/angular.png";
import nextjs from "../assets/courses-logo/nextjs.png";
import responsive from "../assets/courses-logo/responsive.png";

export const radioDatas = [
    {
        id: "radio1",
        type: "radio",
        value: "radio1",
        name: "level",
        title: "Beginner",
        description: "I have never coded or only know the basics.",
    },
    {
        id: "radio2",
        type: "radio",
        value: "radio2",
        name: "level",
        title: "Intermediate",
        description: "I have created some projects with code.",
    },
    {
        id: "radio3",
        type: "radio",
        value: "radio3",
        name: "level",
        title: "Advanced",
        description: "I have professional experience writing code.",
    },
];

export const checkboxDatas = [
    {
        id: "checkbox1",
        value: "checkbox1",
        name: "courses",
        type: "checkbox",
        label: "HTML/CSS",
        logo: html,
    },
    {
        id: "checkbox2",
        value: "checkbox2",
        name: "courses",
        type: "checkbox",
        label: "Javascript",
        logo: js,
    },
    {
        id: "checkbox3",
        value: "checkbox3",
        name: "courses",
        type: "checkbox",
        label: "ReactJS",
        logo: react,
    },
    {
        id: "checkbox4",
        value: "checkbox4",
        name: "courses",
        type: "checkbox",
        label: "NodeJS",
        logo: nodejs,
    },
    {
        id: "checkbox5",
        value: "checkbox5",
        name: "courses",
        type: "checkbox",
        label: "Angular",
        logo: angular,
    },
    {
        id: "checkbox6",
        value: "checkbox6",
        name: "courses",
        type: "checkbox",
        label: "NextJS",
        logo: nextjs,
    },
    {
        id: "checkbox7",
        value: "checkbox7",
        name: "courses",
        type: "checkbox",
        label: "Responsive UI",
        logo: responsive,
    },
];

export const selectDatas = [
    {
        id: 1,
        value: 1,
        label: "Change my career",
    },
    {
        id: 2,
        value: 2,
        label: "Grow in my existing role",
    },
    {
        id: 3,
        value: 3,
        label: "Build a project",
    },
    {
        id: 4,
        value: 4,
        label: "Learn for school",
    },
    {
        id: 5,
        value: 5,
        label: "Learn for fun",
    },
    {
        id: 0,
        value: 0,
        label: "Not sure yet",
    },
];
