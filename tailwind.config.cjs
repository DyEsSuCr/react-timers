/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#ff006e',
        primary: '#212121',
        second: '#262626',
        js: '#ffc500',
        jsh: '#ecb500',
        green: '#00ff55',
      },
      boxShadow: {
        shadow: '0px 0.8rem 0.8rem rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
