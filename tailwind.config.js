module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    colors: {
      pink: "#ed70c0",
      black: "#ed70c033",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    fontFamily: {
      sans: ["Roboto", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["VT323", "ui-monospace"],
      display: ['"Rubik Vinyl"', "cursive"],
    },
  },
  extend: {
    backgroundImage: {
      wave: "url('/assets/img/wave.svg')",
    },
  },
  plugins: [],
};
