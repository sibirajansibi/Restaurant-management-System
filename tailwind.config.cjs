// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'restaurant': {
//           50: '#fff7ed',
//           100: '#ffedd5',
//           200: '#fed7aa',
//           300: '#fdba74',
//           400: '#fb923c',
//           500: '#f97316',  // Primary restaurant theme color
//           600: '#ea580c',
//           700: '#c2410c',
//           800: '#9a3412',
//           900: '#7c2d12',
//         },
//       }
//     },
//   },
//   plugins: [],
// }/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}