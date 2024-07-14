/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./components/**/*.{html,js}",
      "/assets/img/**/*.{png,jpg,svg}",
   ],
   theme: {
      extend: {
         width: {
            '1/3-calc': 'calc(100% / 3)',
          },
      },
   },
   plugins: [],
};
