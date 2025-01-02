/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px", // Custom 'sm' breakpoint
        md: "800px", // Custom 'md' breakpoint
        lg: "1080px", // Custom 'lg' breakpoint
      },
    },
  },
  plugins: [],
};
