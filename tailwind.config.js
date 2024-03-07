/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#f05123",
            },
            backgroundColor: {
                footerColor: "#181821",
                overlay: "rgba(0,0,0,.3)",
                overlay2: "rgba(0,0,0,.5)",
            },
            boxShadow: {
                main: "0 -4px 32px rgba(0,0,0,.2)",
            },
        },
        screens: {
            "mobile-sm": "501px",
            mobile: "640px",
            tablet: "740px",
            "tablet-sm": "850px",
            laptop: "1025px",
            desktop: "1281px",
            "desktop-lg": "1440px",
        },
    },
    plugins: [],
};
