/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow":
          "-5rem -5rem 10rem 0 #272c5a,5rem 5rem 10rem 0 #121530",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
      },
      colors: {
        "soft-red": "#F87070",
        "aqua-blue": "#70F3F8",
        "lavender-purple": "#D881F8",
        "pale-blue": "#D7E0FF",
        "dark-navy": "#1E213F",
        "light-gray": "#EFF1FA",
        "midnight-blue": "#161932",
        "overlay-color": "#0A0C1C",
      },
      width: {
        "outer-circle-desktop": "25.625rem",
        "inner-circle-progress-container": "22.875rem",
        "inner-circle-progress": "21.188rem",
        "outer-circle-smartphone": "90%",
        "inner-circle-progress-container-smartphone": "90%",
        "inner-circle-progress-smartphone": "90%",
      },
      fontFamily: {
        space: ["Space Mono"],
        roboto: ["Roboto Slab"],
        kumbh: ["Kumbh Sans"],
      },
      fontSize: {
        h1: "6.25rem",
        h2: "1.75rem",
        h3: "1rem",
        h4: "0.813rem",
        "p-m": "0.875rem",
        "p-s": "0.75rem",
        "h1-smartphone": "5rem",
      },
      lineHeight: {
        "h1-line": "7.5rem",
        "h2-line": "2.125rem",
        "h3-line": "1.188rem",
        "h4-line": "1rem",
        "p-m-line": "1.125rem",
        "p-s-line": "0.875rem",
      },
      letterSpacing: {
        "h1-l-space": "-0.313rem",
        "h3-l-space": "0.938rem",
        "h4-l-space": "0.313rem",
      },
    },
  },
  plugins: [],
};
