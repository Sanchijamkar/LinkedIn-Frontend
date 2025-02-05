  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          "xxs": "500px",
          "xs": "524px", 
          "s": "550px",
          "ss": "590px",
          "smd": "779px",
          "d": "850px",
        },
        width: {
          "590": "590px",
          "779": "749px",
        }
      },
    },
    plugins: [],
  }

