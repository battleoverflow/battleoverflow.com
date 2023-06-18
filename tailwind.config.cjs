/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "patreon-base": "#f60e10",
        "github-base": "#0d1117"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
