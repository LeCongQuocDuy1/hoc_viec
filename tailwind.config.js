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
            },
        },
    },
    plugins: [],
};
