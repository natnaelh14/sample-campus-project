module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/tide-hero.jpg')",
        "app-orange": "url('/images/my-laundry-app.jpg')",
        "app-blue": "url('/images/mobile-app.jpg')",
        lnl: "url('/images/lnl.jpg')",
        hours: "url('/images/hours.jpg')",
      },
      spacing: {
        144: "36rem",
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
        gothamUltra: ["Gotham Ultra", "serif"],
      },
      borderRadius: {
        35: "35px",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      gray: "#C0C0C0",
      cream: "#ecb4a3",
      white: "#fff",
      blue: {
        light: "#0033cc",
        primary: "#00269a",
        dark: "#001f7a",
      },
      orange: {
        light: "#ff7433",
        primary: "#ff5100",
        dark: "#e04700",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
