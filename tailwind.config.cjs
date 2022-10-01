/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#eeba30",
                primaryDark: "#d3a625",
                secondary: "#ae0001",
                secondaryDark: "#740001"
            }
        }
    },
    plugins: []
};
