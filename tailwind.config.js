module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    keyframes: {
      background: {
        "0%": { "background-position": "0 0" },
        "100%": { "background-position": "100% 0" },
      },
    },
    animation: {
      "background": "background 60s linear infinite alternate",
      "background-desktop": "background 10s linear infinite alternate",
    },
    extend: {},
  },
  plugins: [],
};
