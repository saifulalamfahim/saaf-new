/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/About.html",
    "./src/Blog.html",
    "./src/projects.html",
    "./src/hire-me.html"
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

