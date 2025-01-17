// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     './components/**/*.{html,js}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'dark': '#181818',
//         'orange': '#ff4a17',
//       }
//     },
//   },
//   plugins: [ ]
// }

// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        orange: "#ff4a17",
      },
      screens: {
        "md-custom": "480px",
      },
    },
  },
  plugins: [],
};
