/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/sub-pages/{About.html,Blog.html,hire-me.html,projects.html}"
  ],
  theme: {
    fontFamily: {
      dmSans: ['DM Sans','sans-serif'],
      inter: ['Inter','sans-serif'],
      code: ['Fira Code','monospace'],
      sarif: ['Instrument Serif','Serif'],
     },
    extend: {},
  },
  plugins: [],
}

