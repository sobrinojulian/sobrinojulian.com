/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,njk}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

