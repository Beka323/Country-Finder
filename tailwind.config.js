/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"selector",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
          colors:{
          white:"#F2F2F2",
          black:"#131323"
        }
        }
    },
    plugins: []
};
